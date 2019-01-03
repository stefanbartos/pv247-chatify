import * as React from 'react';
import * as Immutable from 'immutable';
import {MessageCon} from '../../containers/MessageCon';
import {IChatMessage} from '../../models/IChatMessage';
import * as PropTypes from 'prop-types';
import {Editor, EditorState} from 'draft-js';

interface MessageListProps {
    onSendMessage: (channelId: Uuid, message: IChatMessage) => void;
    messageIdsList: Immutable.List<Uuid>;
    channelId: Uuid;
}

interface IState {
    text: string;
    editorState: EditorState;
}

export class MessageList extends React.PureComponent<MessageListProps, IState> {

    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };

    readonly state = {
        text: '',
        editorState: EditorState.createEmpty()
    };

    private onSendMessage = () => {
        const chatMessage: IChatMessage = {
            messageAuthor: 'Author',
            messageAuthorImage: 'image',
            id: '1',
            chatMessageText: this.state.editorState.getCurrentContent().getPlainText(),
            messageUpvotes: 0,
        };

        this.props.onSendMessage(this.props.channelId, chatMessage);
        console.log(chatMessage.id);
        this.setState(() => ({
            text: chatMessage.chatMessageText
        }));
    };

    // private onValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { value } = event.target;
    //     console.log(value);
    //     this.setState(() => ({
    //         text: value
    //     }));
    // };

    onChange = (editorState: EditorState) => {
        this.setState(() => ({
            editorState
        }));
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
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={this.onSendMessage}>Send</button>
                        {/*<input*/}
                            {/*type="text"*/}
                            {/*value={this.state.text}*/}
                            {/*onChange={this.onValueChanged}*/}
                            {/*placeholder="Enter your message..."/>*/}
                    </span>
                </div>
            </div>
        );
    }
}
