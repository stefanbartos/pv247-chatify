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
    readonly onChannelClick: (channelId: Uuid) => void | undefined;
}

type IProps = IChannelItemOwnProps & IChannelItemStateProps & IChannelItemDispatchProps;

export class ChannelItem extends React.PureComponent<IProps, any> {

    private getChannelMessages = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const eventValue = event.target;
        console.log(eventValue);
        this.props.onChannelClick(this.props.id);
    };

    render() {
        const {index, channel} = this.props;

        return (
            <li key={index} className="nav-item">
                <a className="nav-link" href="#" onClick={() => this.getChannelMessages}>
                    {channel.name}
                </a>
            </li>
        );
    }
}
