import * as Immutable from 'immutable';
import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';
import { fetchChannelsStarted, fetchChannelsFailed, fetchChannelsSuccess } from './actionCreator';
import { fetchAllChannelsApiAsync } from '../../../api/channelRepository';
import { IChannelItem } from '../../models/IChannelItem';

export const fetchChannelsForUser = (): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchChannelsStarted());

        const token: string = getState().chatify.token!;
        const email: string = getState().chatify.profile.userDetails!.email;
        try {
            const channels = await fetchAllChannelsApiAsync(token);
            const userChannels: IChannelItem[] = [];
            for (const channel of channels) {
                if (channel.customData.members.indexOf(email) < 0) {
                    continue;
                }
                userChannels.push({
                    id: channel.id,
                    name: channel.name,
                    author: channel.customData.author,
                    members: Immutable.List(channel.customData.members)
                });
            }
            dispatch(fetchChannelsSuccess(Immutable.List(userChannels)));
        } catch (err) {
            console.log(`uz sa mi nechce vymyslat novu hlasku:(: ${err}`);
            dispatch(fetchChannelsFailed());
        }
    };
