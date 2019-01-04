import { IUserDetails } from '../../models/IUserDetails';
import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';
import { uploadUserDetailsApiAsync } from '../../../api/usersRepository';
import { updateProfileUserDetailsStarted, updateProfileUserDetailsFailed, updateProfileUserDetailsSuccess } from './actionCreators';

export const uploadUserDetails = (userDetails: IUserDetails): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(updateProfileUserDetailsStarted());

        const token: any = getState().chatify.token;
        try {
            const response: any = await uploadUserDetailsApiAsync(userDetails, token);
            dispatch(updateProfileUserDetailsSuccess(response));
        } catch (err) {
            console.log(`še to posralo: ${err}`);
            dispatch(updateProfileUserDetailsFailed());
        }
    };
