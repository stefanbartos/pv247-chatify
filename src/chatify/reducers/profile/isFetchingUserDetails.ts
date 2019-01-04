import {
    CHATIFY_PROFILE_FETCHING_USER_DETAILS_STARTED,
    CHATIFY_PROFILE_FETCHING_USER_DETAILS_FAILED,
    CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS
} from './../../constants/actionTypes';

export const isFetchingUserDetails = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHATIFY_PROFILE_FETCHING_USER_DETAILS_STARTED: {
            return true;
        }
        case CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS:
        case CHATIFY_PROFILE_FETCHING_USER_DETAILS_FAILED: {
            return false;
        }
        default:
            return prevState;
    }
};
