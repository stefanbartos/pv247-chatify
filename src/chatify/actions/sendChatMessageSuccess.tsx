import {
    CHATIFY_MESSAGE_SEND_FAILURE,
    CHATIFY_MESSAGE_SEND_STARTED,
    CHATIFY_MESSAGE_SEND_SUCCESS
} from '../constants/actionTypes';
import {IChatMessage} from '../models/IChatMessage';
import {Dispatch} from 'redux';
import {ChatMessageGetModel} from '../../api/chatMessage/chatMessageGetModel';
import {postChatMessage} from '../../api/chatMessage/chatMessageRepository';
import {ChatMessageCustomDataModel} from '../../api/chatMessage/chatMessageCustomDataModel';

export const sendChatMessage = (channelId: string, chatMessage: IChatMessage): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(sendChatMessageStarted());

        const customData: ChatMessageCustomDataModel = {
            likes: 0
        };

        const message: ChatMessageGetModel | null | undefined = await postChatMessage(channelId, chatMessage.chatMessageText, customData);

        if (message === null || message === undefined) {
            dispatch(sendChatMessageFailure());
        }
        else {
            chatMessage.id = message.id;
            dispatch(sendChatMessageSuccess(channelId, chatMessage));
        }
};

export const sendChatMessageStarted = (): Action => ({
    type: CHATIFY_MESSAGE_SEND_STARTED
});

export const sendChatMessageSuccess = (channelId: string, chatMessage: IChatMessage): Action => ({
    type: CHATIFY_MESSAGE_SEND_SUCCESS,
    payload: {
        channelId,
        chatMessageText: chatMessage,
    }
});

export const sendChatMessageFailure = (): Action => ({
    type: CHATIFY_MESSAGE_SEND_FAILURE
});

// TODO: move to actionCreators.ts
