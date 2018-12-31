import {ChatMessageCustomDataModel} from './chatMessageCustomDataModel';
import {ChatMessageGetModel} from './chatMessageGetModel';
import {ChatMessagePostModel} from './chatMessagePostModel';
import {createApiMessageUrl, deleteApiMessageUrl} from '../../chatify/constants/api';
import {PostRequest} from '../requests/postRequest';


export const postChatMessage = async (channelId: string, chatMessage: string, customData: ChatMessageCustomDataModel): Promise<ChatMessageGetModel | undefined | null> => {
    const requestBody: ChatMessagePostModel = {
        value: chatMessage,
        customData
    };

    const response = await fetch(createApiMessageUrl(channelId), PostRequest(requestBody));

    if (response.status === 201) {
        return await response.json();
    }
    else if (response.status === 400) {
        return null;
    }
    // if any error occurs (channel not found)
    return undefined;
};

export const deleteChatMessage = async (channelId: string, chatMessageId: string): Promise<boolean | undefined> => {
    const response = await fetch(deleteApiMessageUrl(channelId, chatMessageId));

    if (response.status === 200 || response.status === 204) {
        return true;
    }
    else if (response.status === 404) {
        return false;
    }
    // if any error occurs (message or channel not found)
    return undefined;
};
