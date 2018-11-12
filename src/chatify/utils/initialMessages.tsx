import * as Immutable from "immutable";
import * as uuid from "uuid";
import {IChatMessages} from "../models/IChatMessages";
// @ts-ignore

export const getInitialMessages = (): Immutable.List<IChatMessages> =>  Immutable.List([
    {
    chatMessagePanel: {
    messageAuthor: 'Yellow Smiley',
        messageAuthorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png',
        messageId: uuid(),
    },
    chatMessageContent: {
    chatMessageContent: 'What is the meaning of life?',
    },}
]);

