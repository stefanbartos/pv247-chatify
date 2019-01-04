import { IUserDetails } from '../../../chatify/models/IUserDetails';

export const convertFromServerUserDetails = (serverUserDetails: any) => {
    return {
        ...serverUserDetails.customData || {},
        email: serverUserDetails.email
    };
};

export const convertToServerDetails = (userDetails: IUserDetails) => {
    return {
        customData: {
            ...userDetails,
            email: undefined
        }
    };
};
