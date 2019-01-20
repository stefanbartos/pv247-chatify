import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';
import { deleteChannelStarted, deleteChannelFailed, deleteChannelSuccess } from './actionCreator';
import { deleteChannelApiAsync } from '../../../api/channelRepository';

export const deleteChannel = (channelId: Uuid) =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(deleteChannelStarted());
        const token: string = getState().chatify.token!;

        try {
            deleteChannelApiAsync(token, channelId);
            dispatch(deleteChannelSuccess(channelId));
        } catch (err) {
            dispatch(deleteChannelFailed());
        }
    };
