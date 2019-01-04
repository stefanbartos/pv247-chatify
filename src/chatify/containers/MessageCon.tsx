import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { IMessageDispatchProps, IMessageStateProps, Message, MessageProps } from '../components/chat/Message';
import { IChatMessage } from '../models/IChatMessage';
import {sendChatMessage} from '../actions/chatMessage/sendChatMessage';

const mapStateToProps = (state: IState, props: MessageProps) => {
    return {
        message: state.chatify.messageList.find(
            (i: IChatMessage) => i.id === props.id)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSend: (channelId: Uuid, message: IChatMessage) => dispatch(sendChatMessage(channelId, message))
    };
};

// @ts-ignore
export const MessageCon = connect<IMessageStateProps, IMessageDispatchProps, IChatMessage>(mapStateToProps, mapDispatchToProps)(Message);
