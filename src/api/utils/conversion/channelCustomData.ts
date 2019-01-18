import { ICreateChannelDto } from '../../../chatify/models/dtos/ICreateChannelDto';

export const convertCreatingChannelToChannelCustomData = (createChannelDto: ICreateChannelDto) => {
    return {
        name: createChannelDto.name,
        customData: {
            ...createChannelDto,
            name: undefined
        }
    };
};
