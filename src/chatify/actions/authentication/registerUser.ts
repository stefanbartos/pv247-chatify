import { Dispatch } from 'redux';
import { registerUserStarted } from './actionCreators';

export const registerUser = (email: string) => async (dispatch: Dispatch) => {
    dispatch(registerUserStarted());
    console.log(email);
};
