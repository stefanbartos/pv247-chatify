// import {IChatMessage} from '../models/IChatMessage';
import * as uuid from 'uuid';
import {CHATIFY_MESSAGE_SEND} from '../constants/actionTypes';

export const sendChatMessage = (chatMessage: string): Action => ({
    type: CHATIFY_MESSAGE_SEND,
    payload: {
        id: uuid(),
        chatMessageText: chatMessage,
    }
});

// TODO: move to actionCreators.ts
