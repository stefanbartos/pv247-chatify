import { Dispatch } from 'redux';
import { IState } from '../../../common/IState';

export const createChannel = (channelName: string): any =>
    async (dispatch: Dispatch, getState: () => IState) => {
        console.log(dispatch);
        console.log(channelName);
        console.log('dispatchujem create channel ' + getState());
    };
