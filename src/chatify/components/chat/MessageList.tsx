import * as React from 'react';
import * as Immutable from 'immutable';
import {MessageCon} from '../../containers/MessageCon';
import * as PropTypes from 'prop-types';
import {SendForm} from './SendForm';
import {IChatMessage} from '../../models/IChatMessage';

interface MessageListProps {
    onSendMessage: (channelId: Uuid, message: IChatMessage) => void;
    messageIdsList: Immutable.List<Uuid>;
    channelId: Uuid;
}

interface IState {

}

export class MessageList extends React.PureComponent<MessageListProps, IState> {

    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };

    public render() {
        // @ts-ignore
        return (
            <div>
                <ul className="message-list">
                    {this.props.messageIdsList.map((id: Uuid, index: number) => (
                    <MessageCon
                        key={index}
                        id={id}
                        index={index + 1}
                         />
                    ))
                    }
                </ul>
                <div className="row">
                    <div className="col">
                        <SendForm
                            channelId={this.props.channelId}
                            onSendMessage={this.props.onSendMessage}/>
                    </div>
                </div>
            </div>
        );
    }
}
