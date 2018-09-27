import jwtDecode from "jwt-decode";
import http from "./httpService";

const tokenKey = "token";

const apiUrl = "http://127.0.0.1:8080/auth"

async function register(user) {
    const response = await http.post(apiUrl + "/register", user);
    const jwt = response.headers["authorization"];
    localStorage.setItem(tokenKey, jwt);

    return response;
}

async function login(credentials) {
    const {
        data: jwt,
        status
    } = await http.post(apiUrl + "/login", credentials);
    if (jwt) localStorage.setItem(tokenKey, jwt);
    return status === 200;
}

function logout() {
    localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
    const jwt = localStorage.getItem(tokenKey);
    if (jwt) {
        const user = jwtDecode(jwt);
        return user;
    }

    return null;
}

function getToken() {
    return localStorage.getItem(tokenKey);
}

http.setJwt(getToken());

export default {
    register,
    login,
    getCurrentUser,
    logout,
    getToken
};