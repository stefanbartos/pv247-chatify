export interface IChannelApiReponse {
    id: string;
    name: string;
    customData: {
        author: string;
        members: string[]
    };
}
