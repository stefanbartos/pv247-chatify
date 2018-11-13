import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {IState} from '../../common/IState';
import {IMessageDispatchProps, IMessageStateProps, Message, MessageProps} from '../components/chat/Message';
import {IChatMessage} from '../models/IChatMessage';
import {sendChatMessage} from '../actions/sendChatMessage';

const mapStateToProps = (state: IState, props: MessageProps) => {
    return {
        message: state.chatify.messageList.find(
            (i: IChatMessage) => i.chatMessagePanel.messageId === props.chatMessagePanel.messageId)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
       onSend: (message: string) => dispatch(sendChatMessage(message))
    };
};

// @ts-ignore
export const MessageCon = connect<IMessageStateProps, IMessageDispatchProps, IChatMessage>(mapStateToProps, mapDispatchToProps)(Message);
