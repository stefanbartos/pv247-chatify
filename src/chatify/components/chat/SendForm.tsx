import * as React from 'react';
// @ts-ignore
import Draft, {Editor, EditorState, RichUtils} from 'draft-js';
import EditorCommand = Draft.Component.Base.EditorCommand;

interface SendFormProps {

}

interface SendFormState {
    editorState: EditorState;
}


export class SendForm extends React.PureComponent<SendFormProps, SendFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

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
        );
    }
}
