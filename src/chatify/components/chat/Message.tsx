import * as React from 'react';
import { IChatMessage } from '../../models/IChatMessage';
import '../../css/chatMessage.css';

export interface IMessageOwnProps {
    readonly id: Uuid;
    readonly index: number;
    // readonly likes: number;
    readonly channelId: Uuid;
}

export interface IMessageStateProps {
    readonly message: IChatMessage;
}

export interface IMessageDispatchProps {
    readonly onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => void;
    readonly onUpdateMessage: (channelId: Uuid, chatMessage: IChatMessage, likesCount: number) => void;
}

type IProps = IMessageOwnProps & IMessageStateProps & IMessageDispatchProps;

export class Message extends React.PureComponent<IProps, any> {

    private onLikeMessage = () => {
        this.props.onUpdateMessage(this.props.channelId, this.props.message, this.props.message.messageUpvotes + 1);
    };

    private onDislikeMessage = () => {
        this.props.onUpdateMessage(this.props.channelId, this.props.message, this.props.message.messageUpvotes - 1);
    };

    private onDeleteMessage = () => {
        this.props.onDeleteMessage(this.props.channelId, this.props.message.id);
    };

    public render() {
        const { index, message } = this.props;

        return (
            <li key={index} className="nav-item">
                <div className="media">
                    <span className="media-left">
                        <img src={message.messageAuthorImage} className="message-author-img"/>
                    </span>
                    <span className="media-right">
                        <div className="message-author-name" key={message.messageAuthor}> {message.messageAuthor}</div>
                    </span>
                </div>
                <div className="row row-border">
                    <div className="col-md-6">{message.chatMessageText}</div>
                    <div className="col-md-1" key={message.messageUpvotes}> {message.messageUpvotes}</div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-default btn-sm">
                            <span className="glyphicon glyphicon-thumbs-up" onClick={this.onLikeMessage}>Like </span>
                        </button>
                        <button type="button" className="btn btn-default btn-sm">
                            <span className="glyphicon glyphicon-thumbs-down" onClick={this.onDislikeMessage}>Dislike </span>
                        </button>
                        <button className="btn btn-default btn-danger" type="button" onClick={this.onDeleteMessage}>Delete</button>
                    </div>
                </div>
            </li>
        );
    }
}
