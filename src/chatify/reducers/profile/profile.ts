import { IProfile } from './../../models/IProfile';
import { userDetails } from './userDetails';

export const profile = (prevState = {} as IProfile, action: Action): IProfile => ({
    userDetails: userDetails(prevState.userDetails, action)
});
