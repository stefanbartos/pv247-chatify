import { IState } from './IState';
import { chatify } from '../chatify/reducers/chatify';

export const rootReducer = (prevState = {} as IState, action: Action): IState => ({
    chatify: chatify(prevState.chatify, action)
});
