import { IProfile } from './../../models/IProfile';
import { userDetails } from './userDetails';
import { isFetchingUserDetails } from './isFetchingUserDetails';
import { isFetchingAvatar } from './isFetchingAvatar';
import { avatarUrl } from './avatarUrl';

export const profile = (prevState = {} as IProfile, action: Action): IProfile => ({
    userDetails: userDetails(prevState.userDetails, action),
    isFetchingUserDetails: isFetchingUserDetails(prevState.isFetchingUserDetails, action),
    isFetchingAvatar: isFetchingAvatar(prevState.isFetchingAvatar, action),
    avatarUrl: avatarUrl(prevState.avatarUrl, action)
});
