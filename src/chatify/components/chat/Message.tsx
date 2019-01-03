import * as React from 'react';
import {IChatMessage} from '../../models/IChatMessage';

export interface MessageProps {
    readonly id: Uuid;
    readonly index: number;
    readonly likes: number;
}

export interface IMessageStateProps {
    readonly message: IChatMessage;
    readonly channelId: Uuid;
}

export interface IMessageDispatchProps {
    readonly onClick: () => void;
    readonly onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => void;
}

type IProps = MessageProps & IMessageStateProps & IMessageDispatchProps;

export class Message extends React.PureComponent<IProps, any> {
    private onDeleteMessage = () => {
        this.props.onDeleteMessage(this.props.channelId, this.props.message.id);
    };

    public render() {
        const {index, message} = this.props;

        return (
            <li key={index} className="nav-item">
                <div className="media">
                    <span className="media-left">
                        <img src={message.messageAuthorImage} className="img-circle" width="25" height="25"/>
                    </span>
                    <span className="media-right">
                        <div key={message.messageAuthor}> {message.messageAuthor}</div>
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-6">{message.chatMessageText}</div>
                    <div className="col-md-1" key={message.messageUpvotes}> {message.messageUpvotes}</div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-default btn-sm">
                            <span className="glyphicon glyphicon-thumbs-up">Like </span>
                        </button>
                        <button type="button" className="btn btn-default btn-sm">
                            <span className="glyphicon glyphicon-thumbs-down">Dislike </span>
                        </button>
                        <button className="btn btn-default btn-danger" type="button" onClick={this.onDeleteMessage}>Delete</button>
                    </div>
                </div>
            </li>
        );
    }
}
