import {CHATIFY_MESSAGE_UPVOTE} from '../constants/actionTypes';

export const updateChatMessage = (id: Uuid): Action => ({
    type: CHATIFY_MESSAGE_UPVOTE,
    payload: {
        id,
    }
});
