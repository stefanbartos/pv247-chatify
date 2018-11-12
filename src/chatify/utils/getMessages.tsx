import {IState} from '../../common/IState';
// @ts-ignore
import {createSelector} from 'reselect';

const getChatMessages = ((state: IState) => state.chatify.messageList);
export const getAllIds = createSelector([getChatMessages], messageList => messageList.messageIdsList);
export const getAlltMessages = createSelector([getChatMessages], messageList => messageList.messageId);

