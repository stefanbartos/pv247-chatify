import {createApiMessageUrl} from '../../chatify/constants/api';
import {IChatMessage} from '../../chatify/models/IChatMessage';
import {fetchUpdate} from '../utils/fetchUpdate';

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
