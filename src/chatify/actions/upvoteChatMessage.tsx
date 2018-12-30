import {CHATIFY_MESSAGE_UPVOTE_STARTED} from '../constants/actionTypes';

export const updateChatMessage = (id: Uuid): Action => ({
    type: CHATIFY_MESSAGE_UPVOTE_STARTED,
    payload: {
        id,
    }
});
