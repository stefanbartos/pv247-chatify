import { fetchUpdate } from './utils/fetchUpdate';
import { IChannelUpdateServer } from './models/IChannelUpdateServer';
import { API_CHANNEL_URL, createSpecificChannelUrl } from '../chatify/constants/api';
import { ICreateChannelDto } from '../chatify/models/api/ICreateChannelDto';
import { convertCreatingChannelToChannelCustomData } from './utils/conversion/channelCustomData';
import { fetchRequest } from './utils/fetchRequest';
import { IChannelServer } from './models/IChannelServer';
import { fetchReceive } from './utils/fetchReceive';
import { fetchDelete } from './utils/fetchDelete';

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

export const updateChannelApiAsync = (token: string, serverDetails: IChannelServer): Promise<IChannelServer> => {
    const url = createSpecificChannelUrl(serverDetails.id);

    const updateServerDetails: IChannelUpdateServer = Object.assign({}, serverDetails, { id: undefined });

    return new Promise(async (resolve, reject) => {
        try {
            const response: IChannelServer = await fetchUpdate(url, token, updateServerDetails);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

export const deleteChannelApiAsync = (token: string, channelId: string): Promise<any> => {
    const url = createSpecificChannelUrl(channelId);

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetchDelete(url, token);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};
