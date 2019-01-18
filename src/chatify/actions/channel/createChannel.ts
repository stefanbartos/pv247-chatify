import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';
import { createChannelStarted, createChannelFailed, createChannelSuccess } from './actionCreator';
import { createChannelApiAsync } from '../../../api/channelRepository';
import { ICreateChannelDto } from '../../models/dtos/ICreateChannelDto';
import * as Immutable from 'immutable';
import { IChannelItem } from '../../models/IChannelItem';

export const createChannel = (channelName: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(createChannelStarted());

        const token: any = getState().chatify.token;
        const email: string = getState().chatify.profile.userDetails!.email;
        try {
            const dto: ICreateChannelDto = {
                name: channelName,
                author: email,
                members: [email]
            };
            const response = await createChannelApiAsync(dto, token);
            const channel: IChannelItem = {
                id: response.id,
                name: response.name,
                author: response.customData.author,
                members: Immutable.List(response.customData.members)
            };
            dispatch(createChannelSuccess(channel));
        } catch (err) {
            console.log(`chybicka: ${err}`);
            dispatch(createChannelFailed());
        }
    };
