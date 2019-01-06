import { IState } from '../../../common/IState';
import {
    addMemberToChannelStarted,
    addMemberToChannelSuccess,
    addMemberToChannelFailed
} from './actionCreators';
import { Dispatch } from 'redux';
import { addMemberToChannelApiAsync } from '../../../api/channelRepository';

export const addMemberToChannel = (channelId: string, memberName: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(addMemberToChannelStarted());

        const token: any = getState().chatify.token;
        console.log(channelId);
        console.log(memberName);

        try {
            await addMemberToChannelApiAsync(token);

            dispatch(addMemberToChannelSuccess());
        } catch (err) {
            console.log(`chybicka: ${err}`);
            dispatch(addMemberToChannelFailed());
        }
    };
