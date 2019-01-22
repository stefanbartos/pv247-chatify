import {
    CHATIFY_USER_REGISTER_STARTED,
    CHATIFY_USER_REGISTER_SUCCESS,
    CHATIFY_USER_REGISTER_FAILURE
} from '../constants/actionTypes';

export const isRegistering = (prevState: boolean = false, action: Action): boolean => {
    switch (action.type) {
        case CHATIFY_USER_REGISTER_STARTED: {
            return true;
        }
        case CHATIFY_USER_REGISTER_SUCCESS:
        case CHATIFY_USER_REGISTER_FAILURE: {
            return false;
        }

        default:
            return prevState;
    }
};
