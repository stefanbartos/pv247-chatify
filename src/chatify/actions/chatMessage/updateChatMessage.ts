import {IState} from '../../../common/IState';
import {Dispatch} from 'redux';
import {updateChatMessageFailure, updateChatMessageStarted, updateChatMessageSuccess} from './actionCreators';
import {updateChatMessageRequest} from '../../../api/chatMessage/chatMessageRepository';
import {IChatMessage} from '../../models/IChatMessage';

export const updateChatMessage = (channelId: string, chatMessage: IChatMessage, upvotesCount: number): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(updateChatMessageStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await updateChatMessageRequest(channelId, chatMessage, token, upvotesCount);
            dispatch(updateChatMessageSuccess(response));

        } catch (e) {
            console.log(`error: ${e}`);
            dispatch(updateChatMessageFailure());
        }
    };
