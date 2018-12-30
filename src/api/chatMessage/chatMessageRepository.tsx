import {ChatMessageCustomDataModel} from './chatMessageCustomDataModel';
import {ChatMessageGetModel} from './chatMessageGetModel';
import {ChatMessagePostModel} from './chatMessagePostModel';
import { API_URL } from '../../chatify/constants/api';
import { API_APP_ID } from '../../chatify/constants/api';
import {PostRequest} from '../requests/postRequest';


export const postChatMessage = async (channelId: string, chatMessage: string, customData: ChatMessageCustomDataModel): Promise<ChatMessageGetModel | undefined | null> => {
    const requestBody: ChatMessagePostModel = {
        value: chatMessage,
        customData
    };

    const response = await fetch(API_URL + 'app/' + API_APP_ID + '/channel/' + channelId + '/message', PostRequest(requestBody));

    if (response.status === 201) {
        return await response.json();
    }
    else if (response.status === 400) {
        return null;
    }
    // if any error occurs
    return undefined;
};
