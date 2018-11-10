import {IChatMessagePanel} from './IChatMessagePanel';
import {IChatMessageContent} from './IChatMessageContent';

export interface IChatMessage {
    chatMessagePanel: IChatMessagePanel;
    chatMessageContent: IChatMessageContent;
}
