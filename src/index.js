import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';


const myInterceptor_Request = axios.interceptors.request.use(request => {
    console.log('[index.js request] ',request);
    return request;
}, error => {
    console.log('[index.js request error] ',error);
    return Promise.reject(error);
});
// For remove the interceptor
//axios.interceptors.request.eject(myInterceptor_Request);


const myInterceptor_Response = axios.interceptors.response.use(response => {
    console.log('[index.js response] ',response);
    return response;
}, error => {
    console.log('[index.js response error] ',error);
    return Promise.reject(error);
});
// For remove the interceptor
//axios.interceptors.request.eject(myInterceptor_Response);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();


