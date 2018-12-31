import {
    CHATIFY_MESSAGE_DELETE_FAILURE,
    CHATIFY_MESSAGE_DELETE_STARTED,
    CHATIFY_MESSAGE_DELETE_SUCCESS
} from '../constants/actionTypes';
import {Dispatch} from 'redux';

export const deleteChatMessage = (channelId: string, chatMessageId: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        // dispatch(deleteChatMessageStarted());

        const removalSuccess: boolean = await deleteChatMessage(channelId, chatMessageId);

        if (removalSuccess) {
            dispatch(deleteChatMessageSuccess(chatMessageId));
        }
        else {
            dispatch(deleteChatMessageFailure());
        }
    };

export const deleteChatMessageStarted = (): Action => ({
    type: CHATIFY_MESSAGE_DELETE_STARTED
});

export const deleteChatMessageSuccess = (chatMessageId: string): Action => ({
    type: CHATIFY_MESSAGE_DELETE_SUCCESS,
    payload: {
        chatMessageId
    }
});

export const deleteChatMessageFailure = (): Action => ({
    type: CHATIFY_MESSAGE_DELETE_FAILURE
});
