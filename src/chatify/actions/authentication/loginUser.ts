import * as localStorageKeys from './../../constants/localStorageKeys';
import { Dispatch } from 'redux';
import { loginApiAsync } from '../../../api/usersRepository';
import { loginUserStarted, loginUserSuccess, loginUserFailure, receiveToken } from './actionCreators';
import { IAuthenticationResponse } from '../../models/IAuthenticationResponse';

export const loginUser = (email: string, redirect: () => void): any => async (dispatch: Dispatch): Promise<void> => {
    dispatch(loginUserStarted());
    try {
        const response: IAuthenticationResponse = await loginApiAsync(email);
        localStorage.setItem(localStorageKeys.TOKEN, JSON.stringify(response.token));
        localStorage.setItem(localStorageKeys.TOKEN_EXPIRATION, JSON.stringify(response.expiration));

        dispatch(receiveToken(response.token));
        await dispatch(loginUserSuccess());
        redirect();
    }
    catch (err) {
        console.log(err);
        dispatch(loginUserFailure(err));
    }
};
