import * as React from 'react';


export class MessageList extends React.PureComponent<{}, {}> {

    // TODO
    // Redesign -> split message list into components (messages and the list itself so it is easier to format the chat)
    // Make the delete, thumbs-up and thumbs-down buttons responsive

    chatMessages = [
        {
            author: 'Yellow Smiley',
            authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png',
            body: 'What is the meaning of life?',
            thumbsUP: '5',
            thumbsDown: '1',
        },

        {
            author: 'Blue Smiley',
            authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG36229.png',
            body: 'Luke I am your father',
            thumbsUP: '4',
            thumbsDown: '2'
        },

        {
            author: 'Troll smiley',
            authorImage: 'http://pngimg.com/uploads/smiley/smiley_PNG188.png',
            body: 'OMG, why does my face look like this?!',
            thumbsUP: '1',
            thumbsDown: '1',
        },
    ];

    public render() {
        return (
            <ul>
                {this.chatMessages.map(message =>
                    <div key="message" className="media">
                        <span className="media-left">
                            <img src={message.authorImage} className="img-circle" width="25" height="25"/>
                        </span>
                        <span className="media-body">
                            <div key={message.author}> {message.author}</div>
                        </span>
                        <div className="media">
                            <span className="media-left">
                                <ul key={message.body}> {message.body}</ul>
                            </span>
                            <span className="pull-right">
                            <button type="submit" name="delete">
                                <i className="glyphicon glyphicon-trash" />
                            </button>
                            <button type="submit" name="delete">
                                <i className="glyphicon glyphicon-thumbs-up" />
                            </button>
                            <button type="submit" name="delete">
                                <i className="glyphicon glyphicon-thumbs-down" />
                            </button>
                            </span>
                        </div>
                    </div>
                )}
            </ul>
        );
    }
}
