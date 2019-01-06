import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { IMessageDispatchProps, IMessageStateProps, Message, IMessageOwnProps } from '../components/chat/Message';
import { IChatMessage } from '../models/IChatMessage';
import { deleteChatMessage } from '../actions/chatMessage/deleteChatMessage';
import {updateChatMessage} from '../actions/chatMessage/updateChatMessage';

const mapStateToProps = (state: IState, props: IMessageOwnProps): any => {
    return {
        message: state.chatify.messageList.find(
            (i: IChatMessage) => i.id === props.id)
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageDispatchProps => {
    return {
        onDeleteMessage: (channelId: Uuid, messageId: Uuid) => dispatch(deleteChatMessage(channelId, messageId)),
        // TODO
        onUpdateMessage: (channelId: Uuid, message: IChatMessage, upvotesCount: number) => dispatch(updateChatMessage(channelId, message, upvotesCount)),
    };
};

export const MessageContainer = connect<IMessageStateProps, IMessageDispatchProps>(mapStateToProps, mapDispatchToProps)(Message);
