import { fetchAvatar } from './fetchAvatar';
import { Dispatch } from 'redux';
import { uploadAvatarStarted, uploadAvatarFailed } from './actionCreators';
import { IState } from '../../../common/IState';
import { uploadFileApiAsync } from '../../../api/usersRepository';
import { uploadUserDetails } from './updateProfileUserDetails';

export const uploadAvatar = (file: File): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(uploadAvatarStarted());

        const token: string = getState().chatify.token!;
        try {
            const uploadResult = await uploadFileApiAsync(file, token);
            if (!uploadResult || !uploadResult[0] || !uploadResult[0].id) {
                throw new Error('Avatar uploaded to the server, however, server did not store the file.');
            }

            const updatedUserDetails: any = {
                ...getState().chatify.profile.userDetails!,
                avatarId: uploadResult[0].id
            };

            await dispatch(uploadUserDetails(updatedUserDetails));
            await dispatch(fetchAvatar(updatedUserDetails.avatarId));
        } catch (err) {
            console.log(`chyby su pre slabych ${err}`);
            dispatch(uploadAvatarFailed());
        }
    };
