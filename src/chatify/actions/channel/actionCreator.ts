import * as actionTypes from '../../constants/actionTypes';
import { IChannelItem } from '../../models/IChannelItem';

export const createChannelStarted = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_STARTED,
});

export const createChannelSuccess = (channelItem: IChannelItem): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_SUCCESS,
    payload: {
        channelItem
    }
});

export const createChannelFailed = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_FAILURE,
});
