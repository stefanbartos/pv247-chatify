import {IChatify} from '../models/IChatify';
import {channels} from './channels';
import {messages} from "./messages";

export const chatify = (prevState = {} as IChatify, action: Action): IChatify => ({
    channels: channels(prevState.channels, action),
    messageList: messages(prevState.messageList, action),
});
