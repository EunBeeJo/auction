import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        valid: false,
        isLoggedIn: false,
        currentUser: ''
    }
};

export default function authentication(state, action) {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch (action.type) {
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });

        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    valid: { $set: true },
                    isLoggedIn: { $set: true },
                    currentUser: { $set: action.email }
                }
            });

        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });

        case types.AUTH_REGISTER:
            return update(state, {
                register: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });

        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: { $set: 'SUCCESS' }
                }
            });

        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });

        default:
            return state;
    }
}