import * as actionTypes from '../../constants/actionTypes';

export const createChannelStarted = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_STARTED,
});

export const createChannelSuccess = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_SUCCESS
});

export const createChannelFailed = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_FAILURE,
});
