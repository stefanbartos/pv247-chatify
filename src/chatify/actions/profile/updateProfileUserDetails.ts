import { IUserDetails } from '../../models/IUserDetails';
import { Dispatch } from 'redux';
// import { IState } from '../../../common/IState';
// import { createApiSpecificUserUrl } from '../../constants/api';
// import { convertToServerDetails } from '../../../api/utils/conversion/profileUserDetails';
// import { performAuthorizedRequest } from '../../../api/utils/performAuthorizedRequest';

export const uploadUserDetails = (userDetails: IUserDetails): any =>
    async (dispatch: Dispatch/* , getState: () => IState */) => {
        console.log('som tu');
        console.log(dispatch);
        console.log(userDetails);

        // const requestUrl: string = createApiSpecificUserUrl(userDetails.email);
        // const token: string | null = getState().chatify.token;
        // const serverDetails: any = convertToServerDetails(userDetails);

        // try {
        //     await performAuthorizedRequest(dispatch,
        //         async () => {

        //             return dispatch(uploadUserDetails(userDetails));
        //         });
        // } catch (err) {

        // }
    };
