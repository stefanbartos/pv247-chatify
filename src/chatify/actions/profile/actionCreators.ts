import * as actionTypes from '../../constants/actionTypes';
import { IUserDetails } from '../../models/IUserDetails';

export const updateProfileUserDetailsSuccess = (userDetails: IUserDetails): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPDATE_USER_DETAILS_SUCCESS,
    payload: {
        userDetails
    }
});

export const updateProfileUserDetailsFailed = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPDATE_USER_DETAILS_FAILED,
});

export const updateProfileUserDetailsStarted = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPDATE_USER_DETAILS_STARTED,
});
