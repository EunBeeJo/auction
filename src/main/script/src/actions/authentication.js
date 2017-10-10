import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from "./ActionTypes";

/* LOGIN */
export function loginRequest(email, password) {
    return (dispatch) => {
        // Inform login API is starting
        dispatch(login());

        // API REQUEST

        // if success => loginSuccess()
        // else loginFailure()
    }
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess() {
    return {
        type: AUTH_LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}