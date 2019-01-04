import { IState } from '../../common/IState';
import { connect } from 'react-redux';
import { createChannel } from '../actions/actionCreators';
import {
    IChatifyStateProps,
    IChatifyDispatchProps,
    Chatify
} from '../components/chat/Chatify';
import {IChannelItem} from '../models/IChannelItem';
import {Dispatch} from 'redux';
import {IChatMessage} from '../models/IChatMessage';
import {deleteChatMessage} from '../actions/deleteChatMessage';
import {sendChatMessage} from '../actions/chatMessage/sendChatMessage';

const mapStateToProps = (state: IState): IChatifyStateProps => {
    return {
        channelIds: state.chatify.channels.map((i: IChannelItem) => i.id).toList(),
        messageIdsList: state.chatify.messageList.map((i: IChatMessage) => i.id).toList()
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChatifyDispatchProps => {
    return {
        onChannelAdd: (text: string) => dispatch(createChannel(text)),
        onSendMessage: (channelId: Uuid, chatMessage: IChatMessage) => dispatch(sendChatMessage(channelId, chatMessage)),
        onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => dispatch(deleteChatMessage(channelId, chatMessageId))
    };
};

export const ChatifyContainer = connect(mapStateToProps, mapDispatchToProps)(Chatify);
