import axios, { AxiosError, AxiosInstance } from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";

interface FailedRequest {
    onSuccess: (token: string) => void;
    onFailure: (err: AxiosError) => void;
}

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue : FailedRequest[] = [];

export const api : AxiosInstance = axios.create({
    baseURL: "http://localhost:5241/api/reifferce/",
    headers: {
        Authorization: `Bearer ${cookies['reifferce.jwt']}`
    }
})

api.interceptors.response.use(response => {
    return response;
}, (error : AxiosError) => {
    if (error.response?.status === 401) {
        if (error.response.statusText === 'Unauthorized') {
            cookies = parseCookies();

            const { 'auth.refreshToken': refreshToken } = cookies;
            const originalConfig = error.config;

            if (!isRefreshing) {
                isRefreshing = true;

                api.post('/user/refresh', {
                    refreshToken: refreshToken,
                }).then(response => {
                    console.log('resposta: ', response);
                    const { jwt } = response.data;
                
                    setCookie(undefined, 'reifferce.jwt', jwt, {
                        maxAge: 60 * 60 * 24 * 30, // 30 days
                        path: "/"
                    });
        
                    setCookie(undefined, 'reifferce.refreshToken', response.data.newRefreshToken, {
                        maxAge: 60 * 60 * 24 * 30, 
                        path: "/"
                    });
    
                    api.defaults.headers['Authorization'] = `Bearer ${jwt}`

                    failedRequestsQueue.forEach(request => request.onSuccess(jwt))
                    failedRequestsQueue = []
                }).catch(err => {
                    failedRequestsQueue.forEach(request => request.onFailure(err))
                    failedRequestsQueue = []
                }).finally(() => {
                    isRefreshing = false;
                })
            }

            return new Promise((resolve, reject) => {
                failedRequestsQueue.push({
                    onSuccess: (jwt: string) => {
                        if (originalConfig) {
                            originalConfig.headers['Authorization'] = `Bearer ${jwt}`;

                            resolve(api(originalConfig));
                        }      
                    },
                    onFailure: (err : AxiosError) => {
                        reject(err);
                    }
                })
            })
        } else {
            destroyCookie(undefined, 'reifferce.jwt');
            destroyCookie(undefined, 'reifferce.refreshToken');
            window.location.href = "/login"        
        }

        return Promise.reject(error);
    }
})