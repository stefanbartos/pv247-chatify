import * as Immutable from 'immutable';
import {CHATIFY_MESSAGE_SEND} from '../constants/actionTypes';
import {IChatMessage} from '../models/IChatMessage';

export const messages = (prevState = Immutable.List<IChatMessage>(), action: Action): Immutable.List<IChatMessage> => {
    switch (action.type) {
        case CHATIFY_MESSAGE_SEND: {
            const {id, messageAuthor= 'Smiley', messageAuthorImage= 'http://pngimg.com/uploads/smiley/smiley_PNG149.png', chatMessageText, messageUpvotes= 3} = action.payload;

            return prevState.push({id, messageAuthor, messageAuthorImage, chatMessageText, messageUpvotes});
        }
        default:
            return prevState;
    }
};
