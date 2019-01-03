import * as actionTypes from '../../constants/actionTypes';
import { IUserDetails } from '../../models/IUserDetails';

export const updateProfileUserDetails = (userDetails: IUserDetails): Action => ({
    type: actionTypes.CHATIFY_PROFILE_UPDATE_USER_DETAILS,
    payload: {
        userDetails
    }
});
