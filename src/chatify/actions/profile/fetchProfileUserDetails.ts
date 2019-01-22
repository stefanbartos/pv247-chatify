import { IState } from './../../../common/IState';
import { Dispatch } from 'redux';
import {
    fetchProfileUserDetailsStarted,
    fetchProfileUserDetailsSuccess,
    fetchProfileUserDetailsFailed,
} from './actionCreators';
import { getUserDetailsApiAsync } from '../../../api/usersRepository';

export const fetchUserProfileUserDetails = (email: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(fetchProfileUserDetailsStarted());

        const token: string = getState().chatify.token!;
        try {
            const serverUserDetails: any = await getUserDetailsApiAsync(email, token);
            dispatch(fetchProfileUserDetailsSuccess(serverUserDetails));
        } catch (err) {
            console.log(`hooops error: ${err}`);
            dispatch(fetchProfileUserDetailsFailed());
        }
    };
