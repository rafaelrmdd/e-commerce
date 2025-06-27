import { UsersContext } from "@/context/ContextProvider";
import axios, { AxiosInstance } from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useContext } from "react";

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
    const cookies = parseCookies();

    if (error.response.status === 401 && 
        //Prevent unecessary loops;
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
            console.log('Refresh token failed')

            destroyCookie(undefined, 'reifferce.jwt');
            destroyCookie(undefined, 'reifferce.refreshToken');

            //Prevent infinite loops
            if (!window.location.pathname.includes('/login')) {
                window.location.href = "/login";
            }

            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
})