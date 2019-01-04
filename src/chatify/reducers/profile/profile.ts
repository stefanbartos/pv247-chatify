import { IProfile } from './../../models/IProfile';
import { userDetails } from './userDetails';
import { isFetchingUserDetails } from './isFetchingUserDetails';

export const profile = (prevState = {} as IProfile, action: Action): IProfile => ({
    userDetails: userDetails(prevState.userDetails, action),
    isFetchingUserDetails: isFetchingUserDetails(prevState.isFetchingUserDetails, action)
});
