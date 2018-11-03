import * as Immutable from 'immutable';
import {IChannel} from '../models/IChannel';
import {CHATIFY_CHANNEL_ADD} from '../constants/actionTypes';

export const channels = (prevState = Immutable.List<IChannel>(), action: Action): Immutable.List<IChannel> => {
    switch (action.type) {
        case CHATIFY_CHANNEL_ADD: {
            return prevState;
        }
        default:
            return prevState;
    }
};
