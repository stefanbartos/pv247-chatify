import * as Immutable from 'immutable';
import {
    CHATIFY_FETCH_MESSAGES_SUCCESS,
    CHATIFY_MESSAGE_SEND_SUCCESS,
    CHATIFY_MESSAGE_UPDATE_SUCCESS
} from '../constants/actionTypes';
import { IChatMessage } from '../models/IChatMessage';

export const messages = (prevState = Immutable.List<IChatMessage>(), action: Action): Immutable.List<IChatMessage> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND_SUCCESS: {

            const chatMessage = action.payload.chatMessage;
            const {
                id = chatMessage.id,
                messageAuthor = chatMessage.createdBy,
                messageAuthorImage = 'http://pngimg.com/uploads/smiley/smiley_PNG149.png',
                chatMessageText = chatMessage.value,
                messageUpvotes = chatMessage.customData.upvotes } = action.payload;

            return prevState.push({ id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes });
        }
        case CHATIFY_MESSAGE_UPDATE_SUCCESS: {
            const chatMessage = action.payload.chatMessage;
            const {
                id = chatMessage.id,
                messageAuthor = chatMessage.createdBy,
                messageAuthorImage = 'http://pngimg.com/uploads/smiley/smiley_PNG149.png',
                chatMessageText = chatMessage.value,
                messageUpvotes = chatMessage.customData.upvotes } = action.payload;

            const index = prevState.findIndex((message: IChatMessage) => message.id === id);
            const previousMessage = prevState.get(index);

            return prevState.set(index, { ...previousMessage, id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes });
        }
        case CHATIFY_FETCH_MESSAGES_SUCCESS: {
            return action.payload.chatMessages;
        }
        default:
            return prevState;
    }
};
