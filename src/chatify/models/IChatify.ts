import * as Immutable from 'immutable';
import {IChannelItem} from './IChannelItem';

// TODO - should we include messages in app model?
// HashMap<channelId, Message(id, text ...)>()
export interface IChatify {
    channels: Immutable.List<IChannelItem>;
}
