import {Dispatch} from 'redux';
import * as Immutable from 'immutable';
import {IState} from '../../../common/IState';
import {fetchChatMessagesFailed, fetchChatMessagesStarted, fetchChatMessagesSuccess} from './actionCreators';
import {getAllChatMessages} from '../../../api/chatMessage/chatMessageRepository';
import {IChatMessage} from '../../models/IChatMessage';

export const fetchChatMessages = (channelId: Uuid): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchChatMessagesStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await getAllChatMessages(channelId, token);
            const channelMessages: IChatMessage[] = [];

            for (const chatMessage of response) {

                channelMessages.push({
                    id: chatMessage.id,
                    chatMessageText: chatMessage.value,
                    messageAuthor: chatMessage.createdBy,
                    messageAuthorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png',
                    messageUpvotes: 0,
                });
            }
            dispatch(fetchChatMessagesSuccess(Immutable.List(channelMessages)));
        } catch (e) {
            console.log(`error: ${e}`);
            dispatch(fetchChatMessagesFailed());
        }
    };
