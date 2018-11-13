import * as React from 'react';
import * as Immutable from 'immutable';

interface MessageListProps {
    messageIdsList: Immutable.List<Uuid>;
}

export class MessageList extends React.PureComponent<MessageListProps> {

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

    // displaySingleChatMessage = (chatMessagePanel: IChatMessagePanel, chatMessageContent: IChatMessageContent) =>
        // (
            // <li key={chatMessagePanel.messageId}>
            //   <Message chatMessagePanel={chatMessagePanel} chatMessageContent={chatMessageContent}/>
            // </li>
       // );

    public render() {
        return (
            // may be undefined, keep patched for now
            // <ul>
            //    {this.props.me}
            // </ul>
            <div>Test</div>
        );
    }
}
