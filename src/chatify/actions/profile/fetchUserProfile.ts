import { IState } from './../../../common/IState';
import { Dispatch } from 'redux';
import {
    fetchProfileUserDetailsStarted,
    updateProfileUserDetailsSuccess,
    updateProfileUserDetailsFailed
} from './actionCreators';
import { getUserDetailsApiAsync } from '../../../api/usersRepository';

export const fetchUserProfile = (): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchProfileUserDetailsStarted());

        const token: any = getState().chatify.token;
        const email: string = getState().chatify.profile.userDetails!.email;
        try {
            const response: any = await getUserDetailsApiAsync(email, token);
            dispatch(updateProfileUserDetailsSuccess(response));
        } catch (err) {
            console.log(`hooops error: ${err}`);
            dispatch(updateProfileUserDetailsFailed());
        }
    };
