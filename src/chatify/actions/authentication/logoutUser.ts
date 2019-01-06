import { logoutUserSuccess } from './actionCreators';
import { Dispatch } from 'redux';
import { removeAuthenticationDataFromLocalStorage } from '../../../common/localStorageUtils';

export const logoutUser = (): any => async (dispatch: Dispatch): Promise<void> => {
    removeAuthenticationDataFromLocalStorage();

    dispatch(logoutUserSuccess());
};
