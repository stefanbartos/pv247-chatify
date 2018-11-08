import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { createChannel } from '../actions/actionCreators';
import { IChannelItemDispatchProps, IChannelItemOwnProps, IChannelItemStateProps, ChannelItem } from '../components/ChannelItem';
import { IChannelItem } from '../models/IChannelItem';

const mapStateToProps = (state: IState, ownProps: IChannelItemOwnProps) => {
    return {
        channel: state.chatify.channels.find((i: IChannelItem) => i.id === ownProps.id),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCreate: (channelName: string) => dispatch(createChannel(channelName)),
    };
};

// @ts-ignore
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps, IChannelItemOwnProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
