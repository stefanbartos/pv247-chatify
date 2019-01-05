import { API_CHANNEL_URL } from '../chatify/constants/api';
import { ICreateChannelDto } from '../chatify/models/api/ICreateChannelDto';
import { convertCreatingChannelToChannelCustomData } from './utils/conversion/channelCustomData';
import { fetchRequest } from './utils/fetchRequest';
import { IChannelApiReponse } from './models/IChannelApiResponse';

export const createChannelApiAsync = (createChannelDto: ICreateChannelDto, token: string): Promise<IChannelApiReponse> => {
    const url = API_CHANNEL_URL;
    const serverChannelCustomData = convertCreatingChannelToChannelCustomData(createChannelDto);

    return new Promise(async (resolve, reject) => {
        try {
            const response: IChannelApiReponse = await fetchRequest(url, token, serverChannelCustomData);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};
