import { SEND_CHAT_MESSAGE } from './actionTypes/messageActionTypes';
import {IChatMessage} from "../models/IChatMessage";

export const sendChatMessage = (channelUuid: Uuid,  chatMessage: IChatMessage) => ({
    type: SEND_CHAT_MESSAGE,
    payload: {
        channelUuid,
        chatMessage,
    }
});
