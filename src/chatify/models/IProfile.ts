import { IUserDetails } from './IUserDetails';

export interface IProfile {
    userDetails: IUserDetails | undefined;
    isFetchingUserDetails: boolean;
    isFetchingAvatar: boolean;
    avatarUrl?: string;
}
