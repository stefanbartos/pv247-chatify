import * as React from 'react';
// import { IChatMessage } from '../../models/IChatMessage';
// import uuid = require('uuid');
// import * as Immutable from 'immutable';
import { IChatMessagePanel } from '../../models/IChatMessagePanel';
import { IChatMessageContent } from '../../models/IChatMessageContent';
import {Message} from './Message';
// import {IState} from '../../../common/IState';
// import {Dispatch} from 'redux';
// import {sendChatMessage} from '../../actions/sendChatMessage';
// import {connect} from 'react-redux';

// interface MessageListProps {
//     messageIdsList: Immutable.List<Uuid>;
// }

// interface MessageListState {
//     //messageIdsList: Immutable.List<Uuid>;
// }

// interface IMessageList extends MessageListProps, MessageListState {
//
// }

export class MessageList extends React.PureComponent<{}, {}> {

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

    // public render() {
    //     return (
    //         <ul>
    //             {this.chatMessages.map(message =>
    //                 <div key={Math.random()} className="media">
    //                     <span className="media-left">
    //                         <img src={message.authorImage} className="img-circle" width="25" height="25"/>
    //                     </span>
    //                     <span className="media-body">
    //                         <div key={message.author}> {message.author}</div>
    //                     </span>
    //                     <div className="media">
    //                         <span className="media-left">
    //                             <ul key={message.body}> {message.body}</ul>
    //                         </span>
    //                         <span className="pull-right">
    //                         <button type="submit" name="delete">
    //                             <i className="glyphicon glyphicon-trash" />
    //                         </button>
    //                         <button type="submit" name="delete">
    //                             <i className="glyphicon glyphicon-thumbs-up" />
    //                         </button>
    //                         <button type="submit" name="delete">
    //                             <i className="glyphicon glyphicon-thumbs-down" />
    //                         </button>
    //                         </span>
    //                     </div>
    //                 </div>
    //             )}
    //         </ul>
    //     );

    displaySingleChatMessage = (chatMessagePanel: IChatMessagePanel, chatMessageContent: IChatMessageContent) =>
        (
            <li key={chatMessagePanel.messageId}>
                <Message chatMessagePanel={chatMessagePanel} chatMessageContent={chatMessageContent}/>
            </li>
        );

    public render() {
        return (
            // may be undefined, keep patched for now
            // <ul>
            //    {messageList.map(message => {
            //        this.displaySingleChatMessage(message : message.chatMessagePanel, message : message.chatMessageContent);
            //    })}
            // </ul>
            <div>Test</div>
        );
    }
}
