import { fetchFileApiAsync } from './../../../api/usersRepository';
import { IState } from '../../../common/IState';
import { Dispatch } from 'redux';
import { fetchAvatarStarted, fetchAvatarFailed, fetchAvatarSuccess } from './actionCreators';

export const fetchAvatar = (avatarId: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchAvatarStarted());

        const token: any = getState().chatify.token;

        try {
            const avatarUrl: any = await fetchFileApiAsync(avatarId, token);
            dispatch(fetchAvatarSuccess(avatarUrl.fileUri));
        } catch (err) {
            console.log(`hooops error: ${err}`);
            dispatch(fetchAvatarFailed());
        }
    };
