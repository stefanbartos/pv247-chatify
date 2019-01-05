import { ICreateChannelDto } from '../../../chatify/models/api/ICreateChannelDto';

export const convertCreatingChannelToChannelCustomData = (createChannelDto: ICreateChannelDto) => {
    return {
        name: createChannelDto.name,
        customData: {
            ...createChannelDto,
            name: undefined
        }
    };
};
