import * as Immutable from 'immutable';
import { combineReducers } from 'redux';
import { CHATIFY_MESSAGE_SEND  } from '../constants/actionTypes'
import { IChatMessages } from "../models/IChatMessages"
import { IChatMessage} from "../models/IChatMessage";

const messageId = (prevState = Immutable.Map<Uuid, IChatMessage>(), action: Action):
    Immutable.Map<Uuid, IChatMessage> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND:
            return prevState.set(action.payload.chatMessage.chatMessagePanel.messageId,
                { ...action.payload.chatMessage });
        default:
            return prevState;
    }
};

const messageIdsList = (prevState: Immutable.List<Uuid> = Immutable.List(), action: Action):
    Immutable.List<Uuid> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND:
            return prevState.push(action.payload.chatMessage.chatMessagePanel.messageId);
        default:
            return prevState;
    }
};

export const messages = combineReducers<IChatMessages>({
    messageIdsList,
    messageId,
});
