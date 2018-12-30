import * as localStorageKeys from './../../constants/localStorageKeys';
import { logoutUserSuccess } from './actionCreators';
import { Dispatch } from 'redux';

export const logoutUser = () => async (dispatch: Dispatch) => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    localStorage.removeItem(localStorageKeys.TOKEN_EXPIRATION);

    dispatch(logoutUserSuccess());
};
