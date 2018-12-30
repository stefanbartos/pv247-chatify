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
import {sendChatMessage} from '../actions/sendChatMessage';
import {IChatMessage} from '../models/IChatMessage';

const mapStateToProps = (state: IState): IChatifyStateProps => {
    return {
        channelIds: state.chatify.channels.map((i: IChannelItem) => i.id).toList(),
        messageIdsList: state.chatify.messageList.map((i: IChatMessage) => i.id).toList()
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChatifyDispatchProps => {
    return {
        onChannelAdd: (text: string) => dispatch(createChannel(text)),
        onSendMessage: (channelId: Uuid, chatMessage: IChatMessage) => dispatch(sendChatMessage(channelId, chatMessage))
    };
};

export const ChatifyContainer = connect(mapStateToProps, mapDispatchToProps)(Chatify);
