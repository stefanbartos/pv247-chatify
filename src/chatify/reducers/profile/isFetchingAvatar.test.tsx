import {
    CHATIFY_PROFILE_FETCH_AVATAR_STARTED,
    CHATIFY_PROFILE_FETCH_AVATAR_FAILURE,
    CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS
} from '../../constants/actionTypes';
import { isFetchingAvatar } from './isFetchingAvatar';

describe('isFetchingAvatar reducer test', () => {
    it('should return initial state', () => {
        expect(isFetchingAvatar(false, { type: '' })).toBeFalsy();
    });

    it(`should handle ${CHATIFY_PROFILE_FETCH_AVATAR_STARTED}`, () => {
        const startedAction: Action = {
            type: CHATIFY_PROFILE_FETCH_AVATAR_STARTED
        };
        expect(isFetchingAvatar(false, startedAction)).toBeTruthy();
    });

    it(`should handle ${CHATIFY_PROFILE_FETCH_AVATAR_FAILURE}`, () => {
        const failAction: Action = {
            type: CHATIFY_PROFILE_FETCH_AVATAR_FAILURE
        };
        expect(isFetchingAvatar(false, failAction)).toBeFalsy();
    });

    it(`should handle ${CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS}`, () => {
        const suceessAction: Action = {
            type: CHATIFY_PROFILE_FETCH_AVATAR_SUCCESS
        };
        expect(isFetchingAvatar(false, suceessAction)).toBeFalsy();
    });
});
