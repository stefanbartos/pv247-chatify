import * as actionTypes from '../../constants/actionTypes';
import { IChannelItem } from '../../models/IChannelItem';

export const addMemberToChannelStarted = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_STARTED,
});

export const addMemberToChannelSuccess = (channelItem: IChannelItem): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_SUCCESS,
    payload: {
        channelItem
    }
});

export const addMemberToChannelFailed = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_MEMBER_FAILED,
});
