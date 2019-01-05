import * as React from 'react';
// @ts-ignore
import Draft, {Editor, EditorState, RichUtils} from 'draft-js';
import EditorCommand = Draft.Component.Base.EditorCommand;
import {IChatMessage} from '../../models/IChatMessage';
import {IState} from '../../../common/IState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {sendChatMessage} from '../../actions/chatMessage/sendChatMessage';
import '../../css/sendForm.css';

interface SendFormDispatchProps {
    onSendMessage: (channelId: Uuid, message: IChatMessage) => void;
}

interface SendFormStateProps {
    channelId: Uuid;
}

interface SendFromProps extends SendFormDispatchProps, SendFormStateProps {
}

interface SendFormState {
    editorState: EditorState;
}

class SendForm extends React.PureComponent<SendFromProps, SendFormState> {

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
            <div>
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
                <span className="float-left">
                    <button className="btn btn-info" type="button" onClick={this.sendMessage}>Send</button>
                </span>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState): SendFormStateProps => {

    const activeChannel = state.chatify.channels.get(0);

    return {
        // @ts-ignore
        channelId: activeChannel.id
    };
};

const mapDispatchToProps = (dispatch: Dispatch): SendFormDispatchProps => {
    return {
        onSendMessage: (channelUuid: Uuid, message: IChatMessage) => dispatch(sendChatMessage(channelUuid, message))
    };
};

export const SendFormContainer = connect(mapStateToProps, mapDispatchToProps)(SendForm);
