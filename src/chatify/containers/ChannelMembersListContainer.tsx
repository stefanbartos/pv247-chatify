import { connect } from 'react-redux';
import {
    IChannelMembersListStateProps,
    IChannelMembersListDispatchProps,
    IChannelMembersListOwnProps,
    ChannelMembersList
} from '../components/ChannelMembersList';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { addMemberToChannel } from '../actions/channelMembers/addMemberToChannel';
import { IChannelItem } from '../models/IChannelItem';

const mapStateToProps = (state: IState, ownProps: IChannelMembersListOwnProps): IChannelMembersListStateProps => {
    return {
        memberEmails: state
            .chatify
            .channels
            .find((ch: IChannelItem) => ch.id === ownProps.channelId)!
            .members
            .toList()
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelMembersListDispatchProps => {
    return {
        addMemberToChannel:
            (channelId: string, memberEmail: string) => dispatch(addMemberToChannel(channelId, memberEmail))
    };
};

export const ChannelMembersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelMembersList);
