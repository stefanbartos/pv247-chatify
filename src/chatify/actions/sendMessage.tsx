import { SEND_CHAT_MESSAGE } from './actionTypes/messageActionTypes';

export const sendChatMessage = (channelUuid: Uuid) => ({
    type: SEND_CHAT_MESSAGE,
    payload: {
        channelUuid,
    }
});
