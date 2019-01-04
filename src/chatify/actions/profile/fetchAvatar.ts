import { fetchFileApiAsync } from './../../../api/usersRepository';
import { IState } from '../../../common/IState';
import { Dispatch } from 'redux';
import { fetchAvatarStarted, fetchAvatarFailed, fetchAvatarSuccess } from './actionCreators';

export const fetchUserProfile = (avatarId: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchAvatarStarted());

        const token: any = getState().chatify.token;

        try {
            const response: any = await fetchFileApiAsync(avatarId, token);
            dispatch(fetchAvatarSuccess(response));
        } catch (err) {
            console.log(`hooops error: ${err}`);
            dispatch(fetchAvatarFailed());
        }
    };
