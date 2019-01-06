import { CHATIFY_USER_LOGOUT } from './../constants/actionTypes';
import {
    CHATIFY_USER_LOGIN_SUCCESS,
} from '../constants/actionTypes';

export const email = (prevState: string | null, action: Action): string | null => {
    switch (action.type) {
        case CHATIFY_USER_LOGIN_SUCCESS: {
            return action.payload.email;
        }

        case CHATIFY_USER_LOGOUT: {
            return null;
        }

        default:
            return prevState;
    }
};
