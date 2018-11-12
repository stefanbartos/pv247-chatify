import * as React from 'react';
import { IChatMessageContent } from '../../models/IChatMessageContent';

interface ChatMessageContentProps {
    readonly chatMessageContent: IChatMessageContent;
}

export class MessageContent extends React.PureComponent<ChatMessageContentProps, {}> {
    public render() {
        return (
            <div className="message-content">
                <div className="message-content">
                    {this.props.chatMessageContent.chatMessageContent}
                </div>
            </div>
        );
    }
}
