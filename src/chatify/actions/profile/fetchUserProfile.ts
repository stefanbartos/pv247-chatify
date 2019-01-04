import { IState } from './../../../common/IState';
import { Dispatch } from 'redux';
import {
    fetchProfileUserDetailsStarted,
    fetchProfileUserDetailsSuccess,
    fetchProfileUserDetailsFailed,
    fetchAvatarStarted,
    fetchAvatarFailed,
} from './actionCreators';
import { getUserDetailsApiAsync } from '../../../api/usersRepository';
import { fetchAvatar } from './fetchAvatar';

export const fetchUserProfile = (): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchProfileUserDetailsStarted());
        dispatch(fetchAvatarStarted());

        const token: string = getState().chatify.token!;
        const email: string = getState().chatify.profile.userDetails!.email;
        try {
            const serverUserDetails: any = await getUserDetailsApiAsync(email, token);
            dispatch(fetchProfileUserDetailsSuccess(serverUserDetails));
            const avatarId: string | undefined = serverUserDetails.avatarId;
            if (avatarId) {
                dispatch(fetchAvatar(avatarId));
            }
        } catch (err) {
            console.log(`hooops error: ${err}`);
            dispatch(fetchProfileUserDetailsFailed());
            dispatch(fetchAvatarFailed());
        }
    };
