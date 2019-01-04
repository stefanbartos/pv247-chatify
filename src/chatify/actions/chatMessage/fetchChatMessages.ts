import {Dispatch} from 'redux';
import {IState} from '../../../common/IState';
import {fetchChatMessagesFailed, fetchChatMessagesStarted, fetchChatMessagesSuccess} from './actionCreators';
import {getAllChatMessages} from '../../../api/chatMessage/chatMessageRepository';

export const fetchChatMessages = (channelId: Uuid): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchChatMessagesStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await getAllChatMessages(channelId, token);
            dispatch(fetchChatMessagesSuccess(response));
        } catch (e) {
            console.log(`error: ${e}`);
            dispatch(fetchChatMessagesFailed());
        }
    };
