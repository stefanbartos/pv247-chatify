import * as React from 'react';

export class SendForm extends React.PureComponent {
    render() {
        return (
            <form
                className="send-message-form">
                <input
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}
