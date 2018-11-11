import * as React from 'react';
import {IChatMessagePanel} from "../../models/IChatMessagePanel";

interface MessagePannelProps {
    readonly chatMessagePanel: IChatMessagePanel;

}

export class MessagePanel extends React.PureComponent<MessagePannelProps, {}> {

    public render() {
        return (
        <div className="message-panel">
            <div className="message-author">{this.props.chatMessagePanel.messageAuthor}</div>
            <div className="messageAuthorImage">{this.props.chatMessagePanel.messageAuthorImage}</div>
            <span className="pull-right">
                <button type="submit" name="delete">
                    <i className="glyphicon glyphicon-trash" />
                </button>
                <button type="submit" name="delete">
                    <i className="glyphicon glyphicon-thumbs-up" />
                </button>
                <button type="submit" name="delete">
                    <i className="glyphicon glyphicon-thumbs-down" />
                </button>
            </span>
        </div>
    );
    }
}
