import * as React from 'react';
import * as Immutable from 'immutable';
import {MessageCon} from '../../containers/MessageCon';

interface MessageListProps {
    onSendMessage: (text: string) => void;
    messageIdsList: Immutable.List<Uuid>;
}

interface IState {
    text: string;
}

export class MessageList extends React.PureComponent<MessageListProps, IState> {
    constructor (props: MessageListProps) {
        super(props);

        this.state = {
            text : ''
        };
    }

    private onSendMessage = () => {
        this.props.onSendMessage(this.state.text);
        this.setState(_ => ({text: ''}));
    };

    private onValueChanged = (event: any) => {
        const { value } = event.currentTarget;
        console.log(value);
        this.setState(() => ({ text: value}));
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
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={this.onSendMessage}>Send</button>
                        <input
                            type="text"
                            value={this.state.text}
                            onChange={this.onValueChanged}
                            placeholder="Enter your message..."/>
                    </span>
                    </div>
                </div>
            </div>
        );
    }
}
