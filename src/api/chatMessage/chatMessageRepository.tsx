import {createApiMessageUrl} from '../../chatify/constants/api';
import {IChatMessage} from '../../chatify/models/IChatMessage';
import {fetchUpdate} from '../utils/fetchUpdate';
import {fetchReceive} from '../utils/fetchReceive';

export const postChatMessage = async (channelId: string, chatMessage: IChatMessage, token: string) => {

    const url = createApiMessageUrl(channelId);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetchUpdate(url, token, chatMessage.chatMessageText);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const getAllChatMessages = async (channelId: string, token: string) => {
    const url = createApiMessageUrl(channelId);

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetchReceive(url, token);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};
