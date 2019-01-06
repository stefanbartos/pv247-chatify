import { token } from './token';
import { CHATIFY_USER_LOGIN_SUCCESS, CHATIFY_USER_LOGIN_FAILURE } from '../constants/actionTypes';

describe('token reducer test', () => {
    it('should return initial state', () => {
        expect(token(null, { type: '' })).toBeNull();
    });

    it(`should handle ${CHATIFY_USER_LOGIN_SUCCESS}`, () => {
        const testToken = 'asdfjkl;123asdrasfdas';
        const successLoginAction: Action = {
            type: CHATIFY_USER_LOGIN_SUCCESS,
            payload: {
                token: testToken
            }
        };
        expect(token(testToken, successLoginAction)).toEqual(testToken);
    });

    it(`should handle ${CHATIFY_USER_LOGIN_FAILURE}`, () => {
        const errorMessage = 'error';
        const failAction: Action = {
            type: CHATIFY_USER_LOGIN_FAILURE,
            payload: {
                err: errorMessage
            }
        };
        expect(token(null, failAction)).toEqual({ error: errorMessage });
    });
});
