import * as React from 'react';
import { IChatMessagePanel } from "./../../models/IChatMessagePanel"
import { IChatMessageContent } from "./../../models/IChatMessageContent"
import { MessageContent} from "./MessageContent";
import {MessagePanel} from "./MessagePanel";


interface MessageProps {
    readonly chatMessagePanel: IChatMessagePanel;
    readonly chatMessageContent: IChatMessageContent;

}

export class Message extends React.PureComponent<MessageProps, {}> {
    public render() {
        return (
            <div className="chat-message-box">
                <img src={this.props.chatMessagePanel.messageAuthorImage}/>
                <div className="chat-message-content">
                    <MessagePanel chatMessagePanel={this.props.chatMessagePanel}/>
                    <MessageContent chatMessageContent={this.props.chatMessageContent}/>
                </div>
            </div>
        )
    }
}
