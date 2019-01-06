import * as React from 'react';
import * as Immutable from 'immutable';
import { ChannelMemberItem } from './ChannelMemberItem';

export interface IChannelMembersListOwnProps {
    readonly channelId: string;
}

export interface IChannelMembersListStateProps {
    readonly memberEmails: Immutable.List<string>;
}

export interface IChannelMembersListDispatchProps {
    readonly addMemberToChannel: (channelId: string, memberEmail: string) => void;
}

interface IChannelMembersListState {
    readonly memberName: string;
}

type ChannelMembersListProps =
    IChannelMembersListOwnProps
    & IChannelMembersListStateProps
    & IChannelMembersListDispatchProps;

export class ChannelMembersList extends React.PureComponent<ChannelMembersListProps, IChannelMembersListState> {
    readonly state = {
        memberName: ''
    };

    private onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState(() => {
            return {
                memberName: value
            };
        });
    }

    private onAddMember = () => {
        console.log('add member');
    }

    render() {
        return (
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    Channel members
                </div>
                <ul className="nav flex-column">
                    {this.props.memberEmails.map((memberEmail: string, index: number) => (
                        <ChannelMemberItem
                            key={index}
                            memberEmail={memberEmail}
                            index={index + 1}
                        />
                    ))}
                </ul>
                <div className="bottom">
                    <input
                        type="text"
                        className="add-channel-input"
                        value={this.state.memberName}
                        onChange={this.onValueChanged}
                        placeholder="Channel name..."
                    />
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={this.onAddMember}>
                            Add member
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}
