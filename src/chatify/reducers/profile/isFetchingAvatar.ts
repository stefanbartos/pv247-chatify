import {
    CHATIFY_PROFILE_FETCH_AVATAR_STARTED,
    CHATIFY_PROFILE_FETCH_AVATAR_FAILURE,
    CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS
} from './../../constants/actionTypes';

export const isFetchingAvatar = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHATIFY_PROFILE_FETCH_AVATAR_STARTED: {
            return true;
        }
        case CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS:
        case CHATIFY_PROFILE_FETCH_AVATAR_FAILURE: {
            return false;
        }
        default:
            return prevState;
    }
};
