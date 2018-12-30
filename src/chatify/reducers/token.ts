import {
    CHATIFY_RECEIVE_TOKEN,
    CHATIFY_USER_LOGOUT,
} from './../constants/actionTypes';

export const token = (prevState: string | null, action: Action): string | null => {
    switch (action.type) {
        case CHATIFY_RECEIVE_TOKEN: {
            return action.payload.token;
        }

        case CHATIFY_USER_LOGOUT: {
            return null;
        }

        default: {
            return prevState;
        }
    }
};
