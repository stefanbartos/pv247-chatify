import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { IChannelItemOwnProps, IChannelItemStateProps, ChannelItem } from '../components/ChannelItem';
import { IChannelItem } from '../models/IChannelItem';

const mapStateToProps = (state: IState, ownProps: IChannelItemOwnProps): IChannelItemStateProps => {
    return {
        channel: state.chatify.channels.find((i: IChannelItem) => i.id === ownProps.id)!,
    };
};

export const ChannelItemContainer = connect<IChannelItemStateProps, null, IChannelItemOwnProps>(
    mapStateToProps,
    null
)(ChannelItem);
