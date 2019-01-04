import * as actionTypes from '../../constants/actionTypes';
import {IChatMessage} from '../../models/IChatMessage';
import {List} from 'immutable';
import {ChatMessageGetModel} from '../../../api/chatMessage/chatMessageGetModel';

export const fetchChatMessagesStarted = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_STARTED,
});

export const fetchChatMessagesSuccess = (chatMessages: List<IChatMessage>): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS,
    payload: {
        chatMessages
    }
});

export const fetchChatMessagesFailed = (): Action => ({
    type: actionTypes.CHATIFY_PROFILE_FETCHING_USER_DETAILS_FAILED,
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


