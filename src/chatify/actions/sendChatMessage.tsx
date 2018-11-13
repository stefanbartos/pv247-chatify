import { SEND_CHAT_MESSAGE } from './actionTypes/messageActionTypes';
// import {IChatMessage} from '../models/IChatMessage';
import * as uuid from 'uuid';

export const sendChatMessage = (chatMessage: string) => ({
    type: SEND_CHAT_MESSAGE,
    payload: {
        channelUuid: uuid(),
        text: chatMessage,
    }
});
