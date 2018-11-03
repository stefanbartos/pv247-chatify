import * as Immutable from 'immutable';
import {IChannel} from './IChannel';

export interface IChatify {
    channels: Immutable.List<IChannel>;
}
