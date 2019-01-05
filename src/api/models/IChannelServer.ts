export interface IChannelServer {
    id: string;
    name: string;
    customData: {
        author: string;
        members: string[]
    };
}
