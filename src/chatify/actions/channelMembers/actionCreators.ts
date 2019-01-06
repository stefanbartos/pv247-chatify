import * as actionTypes from '../../constants/actionTypes';

export const addMemberToChannelStarted = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_STARTED,
});

export const addMemberToChannelSuccess = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_SUCCESS,
});

export const addMemberToChannelFailed = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_FAILED,
});
