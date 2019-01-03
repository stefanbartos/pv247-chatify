import { IUserDetails } from '../../models/IUserDetails';
import { CHATIFY_PROFILE_UPDATE_USER_DETAILS_SUCCESS } from '../../constants/actionTypes';

const defaultValues = {
    email: 'string',
    firstName: 'meno',
    lastName: 'priezvisko'
};

export const userDetails = (prevState: IUserDetails | undefined = defaultValues, action: Action): IUserDetails | undefined => {
    switch (action.type) {
        case CHATIFY_PROFILE_UPDATE_USER_DETAILS_SUCCESS: {
            return action.payload.userDetails;
        }
        default: {
            return prevState;
        }
    }
};
