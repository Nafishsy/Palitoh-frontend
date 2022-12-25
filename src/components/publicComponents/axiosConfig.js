import axios from "axios";
import { json } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://localhost:44379/api'
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem("_authToken");

    debugger;
    return config;
}, (err) => {
    debugger;
});

instance.interceptors.response.use((rsp) => {
    debugger;
    return rsp;
}, (err) => {
    debugger;
    if (err.response.status === 401) {
        debugger;
        alert("Auth Hoy nai");
        window.location.href = "/";
    }
    debugger
    return Promise.reject(err);
});
export default instance;