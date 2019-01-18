import { IUpdateChannelNameDto } from './../../models/dtos/IUpdateChannelNameDto';
import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';
import { IChannelItem } from '../../models/IChannelItem';
import {
    updateChannelNameStarted,
    updateChannelNameFailed,
    updateChannelNameSuccess
} from './actionCreator';
import { IChannelServer } from '../../../api/models/IChannelServer';
import { updateChannelApiAsync } from '../../../api/channelRepository';

export const updateChannelName = (updateChannelNameDto: IUpdateChannelNameDto) =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(updateChannelNameStarted());

        const token: any = getState().chatify.token;
        const { id: channelId, name: channelName } = updateChannelNameDto;
        const channel: IChannelItem = getState().chatify.channels.find(ch => ch.id === channelId)!;

        const channelServerDetails: IChannelServer = {
            id: channel.id,
            name: channelName,
            customData: {
                author: channel.author,
                members: channel.members.toArray()
            }
        };

        try {
            const updatedServerDetails = await updateChannelApiAsync(token, channelServerDetails);
            const updatedChannel: IChannelItem = Object.assign(
                {},
                channel,
                { members: updatedServerDetails.customData.members }
            );

            dispatch(updateChannelNameSuccess(updatedChannel));
        } catch (err) {
            console.log(err);
            dispatch(updateChannelNameFailed());
        }
    };
