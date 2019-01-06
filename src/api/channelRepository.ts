import { API_CHANNEL_URL } from '../chatify/constants/api';
import { ICreateChannelDto } from '../chatify/models/api/ICreateChannelDto';
import { convertCreatingChannelToChannelCustomData } from './utils/conversion/channelCustomData';
import { fetchRequest } from './utils/fetchRequest';
import { IChannelServer } from './models/IChannelServer';
import { fetchReceive } from './utils/fetchReceive';

export const createChannelApiAsync = (createChannelDto: ICreateChannelDto, token: string): Promise<IChannelServer> => {
    const url = API_CHANNEL_URL;
    const serverChannelCustomData = convertCreatingChannelToChannelCustomData(createChannelDto);

    return new Promise(async (resolve, reject) => {
        try {
            const response: IChannelServer = await fetchRequest(url, token, serverChannelCustomData);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

export const fetchAllChannelsApiAsync = (token: string): Promise<IChannelServer[]> => {
    const url = API_CHANNEL_URL;

    return new Promise(async (resolve, reject) => {
        try {
            const response: IChannelServer[] = await fetchReceive(url, token);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

export const addMemberToChannelApiAsync = (token: string) => {
    console.log(token);
};
