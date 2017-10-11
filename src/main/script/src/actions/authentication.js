import axios from 'axios';
import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from "./ActionTypes";

const loginApi = '/api/login';
const registerApi = '/api/register';

/* LOGIN */
export function loginRequest(email, password) {
    return (dispatch) => {
        // Inform login API is starting
        dispatch(login());

        // TODO
        // API REQUEST
        return axios.post(loginApi, { email, password })
            .then((response) => {
            // if (response is SUCCEED) dispatch(loginSuccess(response.userName))
                dispatch(loginSuccess(email));
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

export function loginSuccess(email) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        email
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(username, email, password) {
    return (dispatch) => {
        dispatch(register());

        return axios.post(registerApi, { username, email, password })
            .then((response) => {
                // if (response is SUCCEED) dispatch(registerSuccess(response.userName))
                dispatch(registerSuccess());
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
        type: AUTH_LOGIN_SUCCESS
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_LOGIN_FAILURE,
        error
    }
}