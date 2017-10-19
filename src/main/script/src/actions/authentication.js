import axios from 'axios';
import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_LOGOUT
} from "./ActionTypes";

const loginApi = '/api/login';
const registerApi = '/api/register';
const logoutApi = '/api/logout';

/* LOGIN */
export function loginRequest(email, password) {
    return (dispatch) => {
        // Inform login API is starting
        dispatch(login());

        // TODO
        // API REQUEST
        return axios.post(loginApi, { email, password })
            .then((response) => {
                console.log(response.data);
                if (response.data.auth) {
                    dispatch(loginSuccess(response.data.name, email));
                } else {
                    dispatch(loginFailure());
                }
            }).catch((error) => {
                // if (response is FAILED)
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(name, email) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        name,
        email
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(name, email, password) {
    return (dispatch) => {
        dispatch(register());

        return axios.post(registerApi, { name, email, password })
            .then((response) => {
                console.log(response.data.status);
                console.log(response.data.statusCode);
                if (response.data.status === "success") dispatch(registerSuccess());
                else dispatch(registerFailure(response.data.statusCode));
            }).catch((error) => {
                // if (response is FAILED) dispatch(registerFailure(response.error.code))
                dispatch(registerFailure(error));
            });
    }
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess(){
    return {
        type: AUTH_REGISTER_SUCCESS
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    }
}

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        return axios.get(logoutApi)
            .then(() => {
                dispatch(logout());
            });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}