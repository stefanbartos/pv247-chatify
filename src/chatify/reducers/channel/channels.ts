import {
    CHATIFY_CHANNEL_ADD_SUCCESS,
    CHATIFY_FETCH_CHANNELS_SUCCESS,
    CHATIFY_CHANNEL_ADD_MEMBER_SUCCESS,
    CHATIFY_CHANNEL_DELETE_SUCCESS
} from './../../constants/actionTypes';
import * as Immutable from 'immutable';
import { IChannelItem } from '../../models/IChannelItem';

export const channels = (prevState = Immutable.List<IChannelItem>(), action: Action): Immutable.List<IChannelItem> => {
    switch (action.type) {
        case CHATIFY_CHANNEL_ADD_SUCCESS: {
            return prevState.push(action.payload.channelItem);
        }

        case CHATIFY_CHANNEL_ADD_MEMBER_SUCCESS: {
            const channelItem: IChannelItem = action.payload.channelItem;

            return prevState.update(
                prevState.findIndex((ch) => ch.id === channelItem.id),
                ch => ({ ...ch, members: channelItem.members })
            );
        }

        case CHATIFY_FETCH_CHANNELS_SUCCESS: {
            return action.payload.channelItems;
        }
        case CHATIFY_CHANNEL_DELETE_SUCCESS: {
            return prevState.remove(prevState.findIndex(ch => ch.id === action.payload.channelId));
        }
        default:
            return prevState;
    }
};
