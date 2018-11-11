import * as React from 'react';
import { IChatMessage } from "../../models/IChatMessage";
import uuid = require("uuid");
import * as Immutable from 'immutable';
import { IChatMessagePanel } from "../../models/IChatMessagePanel"
import { IChatMessageContent } from "../../models/IChatMessageContent"
import {Message} from "./Message";
import {IState} from "../../../common/IState";
import {getAllIds, getAlltMessages} from "../../utils/getMessages";
import {Dispatch} from "redux";
import {sendChatMessage} from "../../actions/sendChatMessage";
import {connect} from "react-redux";

interface MessageListProps {
    readonly sendChatMessage: ( channelUuid: Uuid, chatMessage: IChatMessage ) => void;
}

interface MessageListState {
    messageList: Immutable.Map<string, IChatMessage>;
    chatChannelId: Uuid;
    messageIdsList: Immutable.List<Uuid>
}

interface IMessageList extends MessageListProps, MessageListState {

}

export class MessageList extends React.PureComponent<IMessageList, {}> {

    // TODO
    // Redesign -> split message list into components (messages and the list itself so it is easier to format the chat)
    // Make the delete, thumbs-up and thumbs-down buttons responsive

    componentDidMount() {
        this.props.sendChatMessage(this.props.chatChannelId, {
            chatMessagePanel: {
                messageAuthor: "Yellow Smiley",
                messageAuthorImage: "http://pngimg.com/uploads/smiley/smiley_PNG36233.png",
                messageId: uuid(),
            },
            chatMessageContent: {
                chatMessageContent: "What is the meaning of life?",
            },
        });

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
    }

    displaySingleChatMessage = (chatMessagePanel: IChatMessagePanel, chatMessageContent: IChatMessageContent) =>
        (
            <div key={chatMessagePanel.messageId}>
                <Message chatMessagePanel={chatMessagePanel} chatMessageContent={chatMessageContent}/>
            </div>
        );

    public render() {
        const messageList = this.props.messageIdsList.map(id => {
            return this.props.messageList.get(id);
        });

        const testPanel = {
            messageAuthor: "Smiley",
            messageAuthorImage: "http://pngimg.com/uploads/smiley/smiley_PNG36233.png",
            // TODO create get channel method
            messageId: uuid(),
        };

        const testContent = {
            chatMessageContent: "Random text",
        };

        return (
            // may be undefined, keep patched for now
           <ul >
               {messageList.map(message => {
                   this.displaySingleChatMessage(message === undefined ? testPanel : message.chatMessagePanel,
                       message === undefined ? testContent : message.chatMessageContent);
               })}
           </ul>
        );
    }
}


// get parameters for the connect method
const mapStateToProps = (state: IState): MessageListState => {
    // @ts-ignore
    return {
        messageList: getAlltMessages(state),
        messageIdsList: getAllIds(state),
        chatChannelId: uuid(),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MessageListProps => {
    return {
        sendChatMessage: (channelUuid: Uuid, chatMessage: IChatMessage) =>
            dispatch(sendChatMessage(channelUuid, chatMessage))
    };
};

export const MessageListCom = connect(mapStateToProps, mapDispatchToProps) (MessageList);
