import * as Immutable from 'immutable';
import {IChannelItem} from './IChannelItem';
import {IChatMessage} from './IChatMessage';

export interface IChatify {
    channels: Immutable.List<IChannelItem>;
    messageList: Immutable.List<IChatMessage>;
    activeChannel: Uuid;
}
