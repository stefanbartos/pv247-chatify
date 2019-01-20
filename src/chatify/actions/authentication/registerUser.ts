import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FAILED_REGISTER_MESSAGE
} from './../../constants/uiMessages';
import { Dispatch } from 'redux';
import {
    registerUserStarted,
    registerUserSuccess,
    registerUserFailure
} from './actionCreators';
import { registerApiAsync } from '../../../api/usersRepository';
import { dismissError } from '../error/actionCreators';

export const registerUser = (email: string): any => async (dispatch: Dispatch): Promise<void> => {
    dispatch(registerUserStarted());
    try {
        await registerApiAsync(email);
        dispatch(registerUserSuccess());
    } catch (err) {
        const dispatchedAction = dispatch(registerUserFailure(FAILED_REGISTER_MESSAGE, err));
        setTimeout(() => {
            dispatch(dismissError(dispatchedAction.payload.error.id));
        }, MILISECONDS_TO_AUTO_DISMISS_ERROR);
    }
};
