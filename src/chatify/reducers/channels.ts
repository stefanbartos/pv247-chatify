import * as Immutable from 'immutable';
import {IChannelItem} from '../models/IChannelItem';
import {CHATIFY_CHANNEL_ADD} from '../constants/actionTypes';

export const channels = (prevState = Immutable.List<IChannelItem>(), action: Action): Immutable.List<IChannelItem> => {
    switch (action.type) {
        case CHATIFY_CHANNEL_ADD: {
            return prevState;
        }
        default:
            return prevState;
    }
};