import {IChatMessage} from '../../models/IChatMessage';
import {Dispatch} from 'redux';
import {IState} from '../../../common/IState';
import {postChatMessage} from '../../../api/chatMessage/chatMessageRepository';
import {sendChatMessageFailure, sendChatMessageStarted, sendChatMessageSuccess} from './actionCreators';

export const sendChatMessage = (channelId: Uuid, chatMessage: IChatMessage): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(sendChatMessageStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await postChatMessage(channelId, chatMessage, token);
            dispatch(sendChatMessageSuccess(response));
        } catch (e) {
            console.log(`error: ${e}`);
            dispatch(sendChatMessageFailure());
        }
    };
