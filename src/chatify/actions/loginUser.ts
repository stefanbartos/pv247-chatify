import { Dispatch } from 'redux';
import {
    CHATIFY_USER_LOGIN_STARTED,
    CHATIFY_USER_LOGIN_SUCCESS,
    CHATIFY_USER_LOGIN_FAILURE
} from './../constants/actionTypes';
import { IUser } from '../models/IUser';
import { loginApiAsync } from '../../api/usersRepository';

const loginUserStarted = (): Action => ({
    type: CHATIFY_USER_LOGIN_STARTED
});

const loginUserSuccess = (user: IUser): Action => ({
    type: CHATIFY_USER_LOGIN_SUCCESS,
    payload: {
        user
    }
});

const loginUserFailure = (): Action => ({
    type: CHATIFY_USER_LOGIN_FAILURE
});

export const loginUser = (email: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loginUserStarted());

        try {
            const user = await loginApiAsync(email);
            dispatch(loginUserSuccess(user));
        } catch (err) {
            dispatch(loginUserFailure());
        }
    };
