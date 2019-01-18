import * as React from 'react';
import * as Immutable from 'immutable';
import { MessageContainer } from '../../containers/MessageContainer';
import * as PropTypes from 'prop-types';
import { SendForm } from './SendForm';
import { IChatMessage } from '../../models/IChatMessage';
import '../../css/messageList.css';

interface IMessageListProps {
    onSendMessage: (channelId: Uuid, message: IChatMessage) => void;
    messageIdsList: Immutable.List<Uuid>;
    channelId: Uuid;
    fetchMessages: (channelId: Uuid) => void;
}

export class MessageList extends React.PureComponent<IMessageListProps> {

    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchMessages(this.props.channelId);
    }

    componentDidUpdate(prevProps: IMessageListProps) {
        if (prevProps.channelId !== this.props.channelId) {
            this.props.fetchMessages(this.props.channelId);
        }
    }

    public render() {
        return (
            <div>
                <div className="message-list">
                <ul>
                    {this.props.messageIdsList.map((id: Uuid, index: number) => (
                        <MessageContainer
                            key={index}
                            id={id}
                            index={index + 1}
                            channelId={this.props.channelId}
                        />
                    ))
                    }
                </ul>
                </div>
                <div className="row">
                    <div className="col">
                        <SendForm
                            channelId={this.props.channelId}
                            onSendMessage={this.props.onSendMessage} />
                    </div>
                </div>
            </div>
        );
    }
}
