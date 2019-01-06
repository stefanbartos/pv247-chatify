import { IChannelItem } from './../../models/IChannelItem';
import { IChannelServer } from './../../../api/models/IChannelServer';
import { IState } from '../../../common/IState';
import {
    addMemberToChannelStarted,
    addMemberToChannelSuccess,
    addMemberToChannelFailed
} from './actionCreators';
import { Dispatch } from 'redux';
import { updateChannelApiAsync } from '../../../api/channelRepository';

export const addMemberToChannel = (channelId: string, memberName: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(addMemberToChannelStarted());

        const token: any = getState().chatify.token;
        const channel = getState().chatify.channels.find((ch) => ch.id === channelId)!;

        const channelServerDetails: IChannelServer = {
            id: channel.id,
            name: channel.name,
            customData: {
                author: channel.author,
                members: channel.members.push(memberName).toArray()
            }
        };

        console.log(channelServerDetails);

        try {
            const updatedServerDetails = await updateChannelApiAsync(token, channelServerDetails);
            const updatedChannel: IChannelItem = Object.assign(
                {},
                channel,
                { members: updatedServerDetails.customData.members }
            );

            dispatch(addMemberToChannelSuccess(updatedChannel));
        } catch (err) {
            console.log(`chybicka: ${err}`);
            dispatch(addMemberToChannelFailed());
        }
    };
