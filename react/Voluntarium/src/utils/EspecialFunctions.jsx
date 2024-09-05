import axios from "axios";


let __HAS_TOKEN__ = false;
let __TOKEN__ = null;


export function configureInterceptors() {
    if (__HAS_TOKEN__)
        axios.defaults.headers.common['Authorization'] = getToken();
}

export function checkToken() {
    const access_token = localStorage.getItem('access_token');
    if (access_token)
        setToken(access_token);
}

function getToken() {
    return __TOKEN__;
}

export function setToken(token) {
    __TOKEN__ = token;
    __HAS_TOKEN__ = true;
}