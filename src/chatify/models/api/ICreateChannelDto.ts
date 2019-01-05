import * as Immutable from 'immutable';

export interface ICreateChannelDto {
    channelName: string;
    author: string;
    members: Immutable.List<string>;
}
