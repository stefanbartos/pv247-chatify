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

const mapStateToProps = (state: IState): IChatifyStateProps => {
    return {
        channelIds: state.chatify.channels.map((i: IChannelItem) => i.id).toList(),
        messageIdsList: state.chatify.messageList.map(() => 'as').toList()
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChatifyDispatchProps => {
    return {
        onChannelAdd: (text: string) => dispatch(createChannel(text)),
        onSendMessage: (text: string) => dispatch(sendChatMessage(text))
    };
};

export const ChatifyContainer = connect(mapStateToProps, mapDispatchToProps)(Chatify);
