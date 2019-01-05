import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { IMessageDispatchProps, IMessageStateProps, Message, MessageProps } from '../components/chat/Message';
import { IChatMessage } from '../models/IChatMessage';
import {deleteChatMessage} from '../actions/chatMessage/deleteChatMessage';

const mapStateToProps = (state: IState, props: MessageProps) => {
    return {
        message: state.chatify.messageList.find(
            (i: IChatMessage) => i.id === props.id)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onDeleteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(deleteChatMessage(channelId, messageId))
    };
};

// @ts-ignore
export const MessageCon = connect<IMessageStateProps, IMessageDispatchProps, IChatMessage>(mapStateToProps, mapDispatchToProps)(Message);
