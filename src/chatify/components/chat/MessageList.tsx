import * as React from 'react';
import * as Immutable from 'immutable';
import {MessageCon} from '../../containers/MessageCon';
// import {Message} from "./Message";

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

    // chatMessages = [
    //     {
    //         author: 'Yellow Smiley',
    //         authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png',
    //         body: 'What is the meaning of life?',
    //         thumbsUP: '5',
    //         thumbsDown: '1',
    //     },
    //
    //     {
    //         author: 'Blue Smiley',
    //         authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36229.png',
    //         body: 'Luke I am your father',
    //         thumbsUP: '4',
    //         thumbsDown: '2'
    //     },
    //
    //     {
    //         author: 'Troll smiley',
    //         authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG188.png',
    //         body: 'OMG, why does my face look like this?!',
    //         thumbsUP: '1',
    //         thumbsDown: '1',
    //     },
    // ];

    private onSendMessage = () => {
        this.props.onSendMessage(this.state.text);
        this.setState(_ => ({text: ''}));
    };

    private onValueChanged = (event: any) => {
        const { value } = event.currentTarget;
        this.setState(() => ({ text: value}));
    };

    public render() {
        return (
            <div>
            <ul className="nav">
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
