import * as React from 'react';
// @ts-ignore
import Draft, {Editor, EditorState, RichUtils} from 'draft-js';
import EditorCommand = Draft.Component.Base.EditorCommand;
// import createStyles from 'draft-js-custom-styles';

interface SendFormProps {

}

interface SendFormState {
    editorState: EditorState;
}

// https://www.npmjs.com/package/draft-js-custom-styles
// const { styles, customStyleFn } = createStyles(['font-size', 'color'], 'CUSTOM_');

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
              <button onClick={this.onUnderlineClick}>Underline</button>
              <button onClick={this.onToggleCode}>Code Block</button>
              <button onClick={this.onBoldClick}>Bold</button>
              <button onClick={this.onItalicClick}>Italic</button>
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                // customStyleFn={customStyleFn}
                handleKeyCommand={this.handleKeyCommand}
                placeholder="Write something ..."
            />
            </div>
        );
    }
}
