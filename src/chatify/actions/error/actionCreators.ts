import * as actionTypes from '../../constants/actionTypes';

export const dismissError = (errorId: Uuid): Action => {
    return {
        type: actionTypes.CHATIFY_DISMISS_ERROR,
        payload: {
            errorId
        }
    };
};
