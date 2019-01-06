import * as actionTypes from '../../constants/actionTypes';
import {IChatMessage} from '../../models/IChatMessage';
import {ChatMessageGetModel} from '../../../api/chatMessage/chatMessageGetModel';
import * as Immutable from 'immutable';

export const fetchChatMessagesStarted = (): Action => ({
    type: actionTypes.CHATIFY_FETCH_MESSAGES_STARTED,
});

export const fetchChatMessagesSuccess = (chatMessages: Immutable.List<IChatMessage>): Action => ({
    type: actionTypes.CHATIFY_FETCH_MESSAGES_SUCCESS,
    payload: {
        chatMessages
    }
});

export const fetchChatMessagesFailed = (): Action => ({
    type: actionTypes.CHATIFY_FETCH_MESSAGES_FAILURE,
});

export const sendChatMessageStarted = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_SEND_STARTED
});

export const sendChatMessageSuccess = (chatMessage: ChatMessageGetModel): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_SEND_SUCCESS,
    payload: {
        chatMessage
    }
});

export const sendChatMessageFailure = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_SEND_FAILURE
});

export const deleteChatMessageStarted = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_DELETE_STARTED
});

export const deleteChatMessageSuccess = (chatMessageId: string): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_DELETE_SUCCESS,
    payload: {
        chatMessageId
    }
});

export const deleteChatMessageFailure = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_DELETE_FAILURE
});

export const updateChatMessageStarted = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_UPDATE_STARTED
});

export const updateChatMessageSuccess = (chatMessage: ChatMessageGetModel): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_UPDATE_SUCCESS,
    payload: {
        chatMessage
    }
});

export const updateChatMessageFailure = (): Action => ({
    type: actionTypes.CHATIFY_MESSAGE_UPDATE_FAILURE
});

