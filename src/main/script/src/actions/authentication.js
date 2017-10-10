import axios from 'axios';
import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from "./ActionTypes";

const loginApi = '/api/login';

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