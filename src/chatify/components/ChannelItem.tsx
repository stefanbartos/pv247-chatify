import * as React from 'react';
import {IChannelItem} from '../models/IChannelItem';

export interface IChannelItemOwnProps {
    readonly id: Uuid;
    readonly index: number;
}

export interface IChannelItemStateProps {
    readonly channel: IChannelItem;
}

export interface IChannelItemDispatchProps {
    readonly onClick: () => void;
}

type IProps = IChannelItemOwnProps & IChannelItemStateProps & IChannelItemDispatchProps;

export class ChannelItem extends React.PureComponent<IProps, any> {
    render() {
        const {index, channel} = this.props;

        return (
            <div key={index} className="channel-list__item">
                <div>{channel.name}</div>
            </div>
        );
    }
}
