import axios, { AxiosInstance } from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";

// interface FailedRequest {
//     onSuccess: (token: string) => void;
//     onFailure: (err: AxiosError) => void;
// }

// let cookies = parseCookies();
// let isRefreshing = false;
// let failedRequestsQueue : FailedRequest[] = [];

// export const api : AxiosInstance = axios.create({
//     baseURL: "http://localhost:5241/api/reifferce/",
//     headers: {
//         Authorization: `Bearer ${cookies['reifferce.jwt']}`
//     }
// })

// api.interceptors.response.use(
//     response => response, 
//     (error : AxiosError) => {
//     if (error.response?.status === 401) {
//         cookies = parseCookies();

//         const { 'reifferce.refreshToken': refreshToken } = cookies;
//         const originalConfig = error.config;

//         if (!isRefreshing) {
//             isRefreshing = true;
        
//             api.post('/user/refresh', {
//                 refreshToken: refreshToken,
//             }).then(response => {   
//                 // response && response.data
//                 if(response?.data) {
//                     const { jwt, newRefreshToken } = response.data;
                
//                     setCookie(undefined, 'reifferce.jwt', jwt, {
//                         maxAge: 60 * 60 * 24 * 30,
//                         path: "/"
//                     });
        
//                     setCookie(undefined, 'reifferce.refreshToken', newRefreshToken, {
//                         maxAge: 60 * 60 * 24 * 30, 
//                         path: "/"
//                     });

//                     api.defaults.headers['Authorization'] = `Bearer ${jwt}`

//                     failedRequestsQueue.forEach(request => request.onSuccess(jwt))
//                     failedRequestsQueue = []
//                 }else {
//                     console.error("error: response.data is undefined");
//                 }
//             }).catch(err => {
//                 console.log('error renewing token. returning to login page...');
                
//                 destroyCookie(undefined, 'reifferce.jwt');
//                 destroyCookie(undefined, 'reifferce.refreshToken');
//                 window.location.href = "/login";

//                 failedRequestsQueue.forEach(request => request.onFailure(err))
//                 failedRequestsQueue = []
//             }).finally(() => {
//                 isRefreshing = false;
//             })
//         }

//         return new Promise((resolve, reject) => {
//             failedRequestsQueue.push({
//                 onSuccess: (jwt: string) => {
//                     if (originalConfig) {
//                         originalConfig.headers['Authorization'] = `Bearer ${jwt}`;
//                         resolve(api(originalConfig));
//                     }      
//                 },
//                 onFailure: (err : AxiosError) => {
//                     reject(err);
//                 }
//             })
//         })
//     }

//     return Promise.reject(error);
// })

const refreshApi = axios.create({
    baseURL: "http://localhost:5241/api/reifferce/",
});

export const api : AxiosInstance = axios.create({
    baseURL: "http://localhost:5241/api/reifferce/",
})


api.interceptors.request.use(request => {
    const cookies = parseCookies();
    const { 'reifferce.jwt': jwt } = cookies;

    if(jwt){
        request.headers['Authorization'] = `Bearer ${jwt}`
    }

    return request;
}, error => {
    return Promise.reject(error);
})

api.interceptors.response.use(response => {
    return response
}, async error => {
    const originalRequest = error.config;
    console.log('Original request: ', originalRequest);
    const cookies = parseCookies();

    if (error.response.status === 401 && 
        !originalRequest._retry &&  
        !originalRequest.url?.includes('/session') &&
        !originalRequest.url?.includes('/user/refresh')) {

        originalRequest._retry = true;
        try{
            const { 'reifferce.refreshToken': refreshToken } = cookies;

            const response = await refreshApi.post('/user/refresh', {
                refreshToken: refreshToken,
            })

            const { jwt, newRefreshToken } = response.data;

            setCookie(undefined, 'reifferce.jwt', jwt, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });
        
            setCookie(undefined, 'reifferce.refreshToken', newRefreshToken, {
                maxAge: 60 * 60 * 24 * 30, 
                path: "/"
            });

            api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

            return api(originalRequest);
        }catch(error){
            console.log('Refresh token failed: ', error)

            destroyCookie(undefined, 'reifferce.jwt');
            destroyCookie(undefined, 'reifferce.refreshToken');

            if (!window.location.pathname.includes('/login')) {
                window.location.href = "/login";
            }

            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
})