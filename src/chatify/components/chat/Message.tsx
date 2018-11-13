import * as React from 'react';
import { IChatMessagePanel } from '../../models/IChatMessagePanel';
import { IChatMessageContent } from '../../models/IChatMessageContent';
import { MessageContent} from './MessageContent';
import {MessagePanel} from './MessagePanel';
import {IChatMessage} from '../../models/IChatMessage';

export interface MessageProps {
    readonly chatMessagePanel: IChatMessagePanel;
    readonly chatMessageContent: IChatMessageContent;
}

export interface IMessageStateProps {
    readonly message: IChatMessage;
}

export interface IMessageDispatchProps {
    readonly onClick: () => void;
}

type IProps = MessageProps & IMessageStateProps & IMessageDispatchProps;


export class Message extends React.PureComponent<IProps, any> {
    public render() {
        return (
            <div className="chat-message-box">
                <h1>Message</h1>
                <img src={this.props.chatMessagePanel.messageAuthorImage}/>
                <div className="chat-message-content">
                    <MessagePanel chatMessagePanel={this.props.chatMessagePanel}/>
                    <MessageContent chatMessageContent={this.props.chatMessageContent}/>
                </div>
            </div>
        );
    }
}
