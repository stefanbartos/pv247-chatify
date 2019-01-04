import {
    CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS,
} from './../../constants/actionTypes';

export const avatarUrl = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS: {
            return action.payload.avatarUrl;
        }

        default: {
            return prevState;
        }
    }
};
