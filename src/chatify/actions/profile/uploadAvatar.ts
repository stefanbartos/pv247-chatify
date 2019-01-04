import { Dispatch } from 'redux';

export const uploadAvatar = (file: File): any =>
    async (dispatch: Dispatch) => {
        console.log(dispatch);
        console.log(file);
    };
