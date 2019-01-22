import { IUserDetails } from '../../models/IUserDetails';
import {
    CHATIFY_PROFILE_UPDATE_USER_DETAILS_SUCCESS,
    CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS
} from '../../constants/actionTypes';

export const userDetails = (prevState: IUserDetails | undefined = undefined, action: Action): IUserDetails | undefined => {
    switch (action.type) {
        case CHATIFY_PROFILE_FETCHING_USER_DETAILS_SUCCESS:
        case CHATIFY_PROFILE_UPDATE_USER_DETAILS_SUCCESS: {
            return action.payload.userDetails;
        }
        default: {
            return prevState;
        }
    }
};
