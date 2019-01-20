import { CHATIFY_USER_LOGIN_FAILURE, CHATIFY_DISMISS_ERROR } from './../constants/actionTypes';
import * as Immutable from 'immutable';

export const errors = (prevState = Immutable.OrderedMap<string, any>(), action: Action): Immutable.OrderedMap<string, any> => {
    switch (action.type) {
        case CHATIFY_USER_LOGIN_FAILURE: {
            return prevState.set(action.payload.error.id, { ...action.payload.error });
        }
        case CHATIFY_DISMISS_ERROR: {
            return prevState.delete(action.payload.error.id);
        }
        // TODO: uncomment when connect router will be working
        // case LOCATION_CHANGE: {
        //      return prevState.clear();
        // }
        default:
            return prevState;
    }
};
