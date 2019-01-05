import { CHATIFY_CHANNEL_ADD_SUCCESS } from './../../constants/actionTypes';
import * as Immutable from 'immutable';
import { IChannelItem } from '../../models/IChannelItem';

export const channels = (prevState = Immutable.List<IChannelItem>(), action: Action): Immutable.List<IChannelItem> => {
    switch (action.type) {
        case CHATIFY_CHANNEL_ADD_SUCCESS: {
            const { id, name } = action.payload;

            return prevState.push({ id, name });
        }
        default:
            return prevState;
    }
};
