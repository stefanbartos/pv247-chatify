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
        this.props.onChannelAdd(this.state.name);
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
                <div id="bottom">
                    <button type="button" className="btn btn-info" onClick={this.onAddChannel}>
                        Add channel
                    </button>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onValueChanged}
                        placeholder="Channel name..."
                    />
                </div>
            </nav>
        );
    }
}
