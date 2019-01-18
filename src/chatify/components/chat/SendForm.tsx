import * as React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { DraftEditorCommand as EditorCommand } from 'draft-js';
import { IChatMessage } from '../../models/IChatMessage';
import '../../css/sendForm.css';

export interface SendFormProps {
    onSendMessage: (channelId: Uuid, message: IChatMessage) => void;
    channelId: Uuid;
}

export interface SendFormState {
    editorState: EditorState;
}

export class SendForm extends React.PureComponent<SendFormProps, SendFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    sendMessage = () => {
        const chatMessage: IChatMessage = {
            messageAuthor: '',
            messageAuthorImage: '',
            id: '',
            chatMessageText: this.state.editorState.getCurrentContent().getPlainText(),
            messageUpvotes: 0,
            messageTime: new Date(),
        };

        this.props.onSendMessage(this.props.channelId, chatMessage);
    };

    onChange = (editorState: EditorState) => {
        this.setState(() => ({
            editorState
        }));
    };

    handleKeyCommand = (command: EditorCommand) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        else {
            return 'not-handled';
        }
    };

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    };

    onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    };

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    };

    render() {
        return (
            <div className="send-input">
                <div>
                    <button className="editor-button" onClick={this.onUnderlineClick}>Underline</button>
                    <button className="editor-button" onClick={this.onToggleCode}>Code Block</button>
                    <button className="editor-button" onClick={this.onBoldClick}>Bold</button>
                    <button className="editor-button" onClick={this.onItalicClick}>Italic</button>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                        placeholder="Write something ..."
                    />
                </div>
                <div className="row">
                    <span className="float-left send-button">
                        <button className="btn btn-info" type="button" onClick={this.sendMessage}>Send</button>
                    </span>
                </div>
            </div>
        );
    }
}
