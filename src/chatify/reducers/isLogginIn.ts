import {
    CHATIFY_USER_LOGIN_STARTED,
    CHATIFY_USER_LOGIN_SUCCESS,
    CHATIFY_USER_LOGIN_FAILURE
} from '../constants/actionTypes';

export const isLoggingIn = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHATIFY_USER_LOGIN_STARTED: {
            return true;
        }
        case CHATIFY_USER_LOGIN_SUCCESS:
        case CHATIFY_USER_LOGIN_FAILURE: {
            return false;
        }

        default:
            return prevState;
    }
};
