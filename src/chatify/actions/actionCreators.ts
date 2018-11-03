import * as uuid from 'uuid';
import {CHATIFY_CHANNEL_ADD} from '../constants/actionTypes';

export const createChannel = (name: string): Action => ({
    type: CHATIFY_CHANNEL_ADD,
    payload: {
        name,
        id: uuid()
    }
});
