import * as actionTypes from '../../constants/actionTypes';

export const receiveToken = (token: string): Action => ({
    type: actionTypes.CHATIFY_RECEIVE_TOKEN,
    payload: {
        token
    }
});

export const invalidateToken = (): Action => ({
    type: actionTypes.CHATIFY_INVALIDATE_TOKEN
});

export const loginUserStarted = (): Action => ({
    type: actionTypes.CHATIFY_USER_LOGIN_STARTED
});

export const loginUserSuccess = (email: string): Action => ({
    type: actionTypes.CHATIFY_USER_LOGIN_SUCCESS,
    payload: {
        email
    }
});

export const loginUserFailure = (err: any): Action => ({
    type: actionTypes.CHATIFY_USER_LOGIN_FAILURE,
    payload: {
        err
    }
});

export const registerUserStarted = (): Action => ({
    type: actionTypes.CHATIFY_USER_REGISTER_STARTED
});

export const registerUserSuccess = (): Action => ({
    type: actionTypes.CHATIFY_USER_REGISTER_SUCCESS
});

export const registerUserFailure = (): Action => ({
    type: actionTypes.CHATIFY_USER_REGISTER_FAILURE
});

export const logoutUserSuccess = (): Action => ({
    type: actionTypes.CHATIFY_USER_LOGOUT
});
