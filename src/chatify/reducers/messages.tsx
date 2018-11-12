import * as Immutable from 'immutable';
import {CHATIFY_MESSAGE_SEND} from '../constants/actionTypes';
import {IChatMessage} from '../models/IChatMessage';

export const messages = (prevState = Immutable.List<IChatMessage>(), action: Action): Immutable.List<IChatMessage> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND: {
            return prevState;
        }
        default:
            return prevState;
    }
};
