import {Dispatch} from 'redux';
import {IState} from '../../../common/IState';
import {deleteChatMessageFailure, deleteChatMessageStarted, deleteChatMessageSuccess} from './actionCreators';
import {deleteChatMessageRequest} from '../../../api/chatMessage/chatMessageRepository';

export const deleteChatMessage = (channelId: string, chatMessageId: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(deleteChatMessageStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await deleteChatMessageRequest(channelId, chatMessageId, token);
            dispatch(deleteChatMessageSuccess(response));

        } catch (e) {
            console.log(`error: ${e}`);
            dispatch(deleteChatMessageFailure());
        }
    };
