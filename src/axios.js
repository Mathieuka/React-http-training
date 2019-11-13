import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM AXIOS INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json FROM AXIOS INSTANCE';


const myInterceptor_Request =  instance.interceptors.request.use(request => {
    console.log('[axios.js request] ',request);
    return request;
}, error => {
    console.log('[axios.js request error] ',error);
    return Promise.reject(error);
});
// For remove the interceptor
//axios.interceptors.request.eject(myInterceptor_Request);

const myInterceptor_Response = instance.interceptors.response.use(response => {
    console.log('[index.js response] ',response);
    return response;
}, error => {
    console.log('[index.js response error] ',error);
    return Promise.reject(error);
});
// For remove the interceptor
//axios.interceptors.request.eject(myInterceptor_Response);

export default instance;