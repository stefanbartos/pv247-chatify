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

export const fetchProfileUserDetailsStarted = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_STARTED,
});

export const fetchProfileUserDetailsSuccess = (userDetails: IUserDetails): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS,
    payload: {
        userDetails
    }
});

export const fetchProfileUserDetailsFailed = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_FAILED,
});

// AVATAR UPLOADING

export const uploadAvatarStarted = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPLOAD_AVATAR_STARTED,
});

export const uploadAvatarSuccess = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPLOAD_AVATAR_SUCCESS,
});

export const uploadAvatarFailed = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPLOAD_AVATAR_FAILED,
});

// AVATAR FETCHING

export const fetchAvatarStarted = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCH_AVATAR_STARTED,
});

export const fetchAvatarSuccess = (avatarUrl: string): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS,
    payload: {
        avatarUrl
    }
});

export const fetchAvatarFailed = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCH_AVATAR_FAILED,
});
