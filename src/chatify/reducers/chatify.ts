import {IChatify} from '../models/IChatify';
import {channels} from './channels';

export const chatify = (prevState = {} as IChatify, action: Action): IChatify => ({
    channels: channels(prevState.channels, action)
});
