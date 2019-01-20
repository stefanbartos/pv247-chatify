import { IState } from '../../common/IState';
import { connect } from 'react-redux';
import { createChannel } from '../actions/channel/createChannel';
import {
    IChatifyStateProps,
    IChatifyDispatchProps,
    Chatify
} from '../components/chat/Chatify';
import { IChannelItem } from '../models/IChannelItem';
import { Dispatch } from 'redux';
import { IChatMessage } from '../models/IChatMessage';
import { deleteChatMessage } from '../actions/chatMessage/deleteChatMessage';
import { sendChatMessage } from '../actions/chatMessage/sendChatMessage';
import { fetchChatMessages } from '../actions/chatMessage/fetchChatMessages';
import { fetchChannelsForUser } from '../actions/channel/fetchChannelsForUser';
import { updateChannelName } from '../actions/channel/updateChannelName';
import { IUpdateChannelNameDto } from '../models/dtos/IUpdateChannelNameDto';

const mapStateToProps = (state: IState): IChatifyStateProps => {
    return {
        channelIds: state.chatify.channels.map((i: IChannelItem) => i.id).toList(),
        messageIdsList: state.chatify.messageList.map((i: IChatMessage) => i.id).toList()
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChatifyDispatchProps => {
    return {
        onChannelAdd: (text: string) => dispatch(createChannel(text)),
        updateChannel: (updateChannelNameDto: IUpdateChannelNameDto) => dispatch(updateChannelName(updateChannelNameDto)),
        fetchChannels: () => dispatch(fetchChannelsForUser()),
        fetchMessages: (channelId: Uuid) => dispatch(fetchChatMessages(channelId)),
        onSendMessage: (channelId: Uuid, chatMessage: IChatMessage) => dispatch(sendChatMessage(channelId, chatMessage)),
        onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => dispatch(deleteChatMessage(channelId, chatMessageId))
    };
};

export const ChatifyContainer = connect(mapStateToProps, mapDispatchToProps)(Chatify);
