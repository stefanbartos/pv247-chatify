import { CHATIFY_CHANNEL_ADD_SUCCESS, CHATIFY_FETCH_CHANNELS_SUCCESS } from './../../constants/actionTypes';
import * as Immutable from 'immutable';
import { IChannelItem } from '../../models/IChannelItem';

export const channels = (prevState = Immutable.List<IChannelItem>(), action: Action): Immutable.List<IChannelItem> => {
    switch (action.type) {
        case CHATIFY_CHANNEL_ADD_SUCCESS: {
            return prevState.push(action.payload.channelItem);
        }

        case CHATIFY_FETCH_CHANNELS_SUCCESS: {
            return action.payload.channelItems;
        }
        default:
            return prevState;
    }
};