import * as React from 'react';
import { IChannelItem } from '../models/IChannelItem';
import { Link } from 'react-router-dom';

export interface IChannelItemOwnProps {
    readonly id: Uuid;
    readonly index: number;
}

export interface IChannelItemStateProps {
    readonly channel: IChannelItem;
}

type IProps = IChannelItemOwnProps & IChannelItemStateProps;

export class ChannelItem extends React.PureComponent<IProps> {
    render() {
        const { index, channel } = this.props;

        return (
            <li key={index} className="nav-item">
                <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
            </li>
        );
    }
}
