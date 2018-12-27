import {
    CHATIFY_USER_LOGIN_STARTED,
    CHATIFY_USER_LOGIN_SUCCESS,
    CHATIFY_USER_LOGIN_FAILURE
} from '../constants/actionTypes';

export const users = (prevState: any, action: Action): any => {
    switch (action.type) {
        case CHATIFY_USER_LOGIN_STARTED: {
            return prevState;
        }
        case CHATIFY_USER_LOGIN_SUCCESS: {
            return prevState;
        }
        case CHATIFY_USER_LOGIN_FAILURE: {
            return prevState;
        }
        default:
            return prevState;
    }
};
