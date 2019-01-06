import * as Immutable from 'immutable';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelItemContainer } from '../containers/ChannelItemContainer';
import '../css/sidebar.css';

interface IChannelListOwnProps {
    readonly onChannelAdd: (name: string) => void;
    readonly channelsIds: Immutable.List<Uuid>;
    readonly fetchChannels: () => void;
}

interface IChannelListState {
    readonly name: string;
}

export class ChannelList extends React.PureComponent<IChannelListOwnProps, IChannelListState> {
    static propTypes = {
        onChannelAdd: PropTypes.func.isRequired
    };

    readonly state = {
        name: ''
    };

    private onAddChannel = () => {
        const channelName = this.state.name.trim();
        if (channelName.length === 0) {
            return;
        }
        this.props.onChannelAdd(channelName);
        this.setState(() => ({
            name: ''
        }));
    };

    private onValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        this.setState(() => ({
            name: value
        }));
    };

    componentDidMount() {
        console.log('som tu');
        this.props.fetchChannels();
    }

    render() {
        return (
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    Channels
                </div>
                <ul className="nav flex-column">
                    {this.props.channelsIds.map((id: Uuid, index: number) => (
                        <ChannelItemContainer
                            key={index}
                            id={id}
                            index={index + 1}
                        />
                    ))
                    }
                </ul>
                <div className="bottom">
                    <input
                        type="text"
                        className="add-channel-input"
                        value={this.state.name}
                        onChange={this.onValueChanged}
                        placeholder="Channel name..."
                    />
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={this.onAddChannel}>
                            Add channel
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}
