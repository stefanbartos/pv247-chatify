import * as Immutable from 'immutable';
import * as React from 'react';
import {ChannelItemContainer} from '../containers/ChannelItem';

interface IProps {
    readonly channelsIds: Immutable.List<Uuid>;
}

export class ChannelsList extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="channel-list">
                {this.props.channelsIds.map((id: Uuid, index: number) => (
                    <ChannelItemContainer
                        key={index}
                        id={id}
                        index={index + 1}
                    />
                ))
                }
            </div>
        );
    }
}
