import axios from "axios";


let __HAS_TOKEN__ = false;
let __TOKEN__ = null;


export function configureInterceptors() {
    // axios.interceptors.request.use((config) => {
    //     config.headers.Authorization = 'Authorization';
    // });

    if (__HAS_TOKEN__)
        axios.defaults.headers.common['Authorization'] = getToken();
}

function getToken() {
    return __TOKEN__;
}

export function setToken(token) {
    __TOKEN__ = token;
    __HAS_TOKEN__ = true;
}