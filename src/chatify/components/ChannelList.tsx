import * as Immutable from 'immutable';
import * as React from 'react';
import {ChannelItemContainer} from '../containers/ChannelItem';

interface IProps {
    readonly onChannelAdd: (name: string) => void;
    readonly channelsIds: Immutable.List<Uuid>;
}

interface IState {
    readonly name: string;
}

export class ChannelList extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            name: ''
        };
    }

    private onAddChannel = () => {
        this.props.onChannelAdd(this.state.name);
        this.setState(_ => ({name : ''}));
    };

    private onValueChanged = (event: any) => {
        const { value } = event.currentTarget;
        console.log(value);
        this.setState(_ => ({ value }));
    };


    render() {
        return (
          <nav className="sidebar-nav">
            <div className="sidebar-header">
              Channels
            </div>
            <ul className="nav">
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
                <button type="button" className="btn btn-info" onSubmit={this.onAddChannel}>
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
