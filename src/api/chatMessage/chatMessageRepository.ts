import {createApiMessageUrl, deleteApiMessageUrl, updateApiMessageUrl} from '../../chatify/constants/api';
import { IChatMessage } from '../../chatify/models/IChatMessage';
import { fetchRequest } from '../utils/fetchRequest';
import { ChatMessagePostModel } from './chatMessagePostModel';
import { fetchDelete } from '../utils/fetchDelete';
import { fetchReceive } from '../utils/fetchReceive';
import {fetchUpdate} from '../utils/fetchUpdate';
import {ChatMessagePutModel} from './chatMessagePutModel';

export const postChatMessage = async (channelId: string, chatMessage: IChatMessage, token: string) => {

    const url = createApiMessageUrl(channelId);
    return new Promise(async (resolve, reject) => {
        try {
            const requestBody: ChatMessagePostModel = {
                value: chatMessage.chatMessageText,
                customData: {
                    upvotes: 0
                }
            };

            const response = await fetchRequest(url, token, requestBody);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const updateChatMessageRequest = async (channelId: string, chatMessage: IChatMessage, token: string, upvotesCount: number) => {
    const url = updateApiMessageUrl(channelId, chatMessage.id);

    return new Promise(async (resolve, reject) => {
        try {
            const requestBody: ChatMessagePutModel = {
                value: chatMessage.chatMessageText,
                customData: {
                    upvotes: upvotesCount
                }
            };

            const response = await fetchUpdate(url, token, requestBody);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const deleteChatMessageRequest = async (channelId: string, chatMessageId: string, token: string) => {

    const url = deleteApiMessageUrl(channelId, chatMessageId);

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetchDelete(url, token);
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
