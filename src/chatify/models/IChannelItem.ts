import * as Immutable from 'immutable';

export interface IChannelItem {
    readonly id: Uuid;
    readonly name: string;
    readonly author: string;
    members: Immutable.List<string>;
}
