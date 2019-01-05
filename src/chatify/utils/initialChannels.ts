import { IChannelItem } from '../models/IChannelItem';
import * as Immutable from 'immutable';
import * as uuid from 'uuid';

export const getInitialChannels = (): Immutable.List<IChannelItem> => Immutable.List([
    { id: uuid(), name: 'Channel 1', author: 'string', members: Immutable.List() },
    { id: uuid(), name: 'Channel 2', author: 'string', members: Immutable.List() },
    { id: uuid(), name: 'Channel 3', author: 'string', members: Immutable.List() }
]);
