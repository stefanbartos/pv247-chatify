import { Dispatch } from 'redux';
import { registerUserStarted, registerUserSuccess, registerUserFailure } from './actionCreators';
import { IUserRegistrationResponse } from '../../models/IUserRegistrationResponse';
import { registerApiAsync } from '../../../api/usersRepository';

export const registerUser = (email: string): any => async (dispatch: Dispatch): Promise<void> => {
    dispatch(registerUserStarted());
    try {
        const response: IUserRegistrationResponse = await registerApiAsync(email);
        console.log('response= ' + response);
        dispatch(registerUserSuccess());
    } catch (err) {
        console.log('erro');
        console.log(err);
        dispatch(registerUserFailure());
    }
};
