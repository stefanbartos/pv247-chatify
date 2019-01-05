import {createApiMessageUrl} from '../../chatify/constants/api';
import {IChatMessage} from '../../chatify/models/IChatMessage';
import {fetchReceive} from '../utils/fetchReceive';
import {fetchRequest} from '../utils/fetchRequest';
import {ChatMessagePostModel} from './chatMessagePostModel';

export const postChatMessage = async (channelId: string, chatMessage: IChatMessage, token: string) => {

    const url = createApiMessageUrl(channelId);
    return new Promise(async (resolve, reject) => {
        try {
            const requestBody: ChatMessagePostModel = {
                value: chatMessage.chatMessageText,
                customData: {}
            };

            const response = await fetchRequest(url, token, requestBody);
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
