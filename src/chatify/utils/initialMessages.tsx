import * as Immutable from 'immutable';
import * as uuid from 'uuid';
import {IChatMessage} from '../models/IChatMessage';

export const getInitialMessages = (): Immutable.List<IChatMessage> =>  Immutable.List([
    {
        messageAuthor: 'Yellow Smiley',
        messageAuthorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png',
        id: uuid(),
        chatMessageText: 'What is the meaning of life?'
    }
]);

