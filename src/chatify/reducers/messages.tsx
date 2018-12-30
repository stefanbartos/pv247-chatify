import * as Immutable from 'immutable';
import {CHATIFY_MESSAGE_SEND_STARTED, CHATIFY_MESSAGE_UPVOTE_STARTED} from '../constants/actionTypes';
import {IChatMessage} from '../models/IChatMessage';

export const messages = (prevState = Immutable.List<IChatMessage>(), action: Action): Immutable.List<IChatMessage> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND_STARTED: {
            const {id, messageAuthor= 'Smiley', messageAuthorImage= 'http://pngimg.com/uploads/smiley/smiley_PNG149.png', chatMessageText, messageUpvotes= 0} = action.payload;

            return prevState.push({id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes});
        }
        case CHATIFY_MESSAGE_UPVOTE_STARTED: {
            const {id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes} = action.payload;
            const index = prevState.findIndex((message: IChatMessage) => message.id === id);
            const previousMessage = prevState.get(index);

            return prevState.set(index, { ...previousMessage, id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes });
        }
        default:
            return prevState;
    }
};

