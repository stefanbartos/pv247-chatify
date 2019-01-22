import { IState } from './../../../common/IState';
import { Dispatch } from 'redux';
import { fetchAvatar } from './fetchAvatar';
import { fetchUserProfileUserDetails } from './fetchProfileUserDetails';
import { getPersistedEmail } from '../../../common/localStorageUtils';

export const fetchUserProfile = (): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        const email: string = getPersistedEmail()!;

        try {
            await dispatch(fetchUserProfileUserDetails(email));

            const avatarId: string | undefined = getState().chatify.profile.userDetails!.avatarId;
            console.log(`avarta ${avatarId}# `);
            if (avatarId) {
                dispatch(fetchAvatar(avatarId));
            }
        } catch (err) {
            console.log(`hooops error: ${err}`);
        }
    };
