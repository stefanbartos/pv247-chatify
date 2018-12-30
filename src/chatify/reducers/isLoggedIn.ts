import {
    CHATIFY_USER_LOGIN_SUCCESS,
    CHATIFY_USER_LOGOUT
} from '../constants/actionTypes';

export const isLoggedIn = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHATIFY_USER_LOGIN_SUCCESS: {
            return true;
        }
        case CHATIFY_USER_LOGOUT: {
            return false;
        }

        default:
            return prevState;
    }
};
