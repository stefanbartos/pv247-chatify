import * as Immutable from 'immutable';
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

export const fetchChannelsStarted = (): Action => ({
    type: actionTypes.CHATIFY_FETCH_CHANNELS_STARTED,
});

export const fetchChannelsSuccess = (channelItems: Immutable.List<IChannelItem>): Action => ({
    type: actionTypes.CHATIFY_FETCH_CHANNELS_SUCCESS,
    payload: {
        channelItems
    }
});

export const fetchChannelsFailed = (): Action => ({
    type: actionTypes.CHATIFY_FETCH_CHANNELS_FAILURE,
});

export const updateChannelNameStarted = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_SUCCESS,
});

export const updateChannelNameSuccess = (channelItem: IChannelItem): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_ADD_SUCCESS,
    payload: {
        channelItem
    }
});

export const updateChannelNameFailed = (): Action => ({
    type: actionTypes.CHATIFY_CHANNEL_UPDATE_FAILURE,
});
