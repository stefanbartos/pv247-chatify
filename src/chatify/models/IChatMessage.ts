export interface IChatMessage {
    messageAuthor: string;
    messageAuthorImage: string;
    id: Uuid;
    chatMessageText: string;
    messageUpvotes: number;
    messageTime: Date;
}
