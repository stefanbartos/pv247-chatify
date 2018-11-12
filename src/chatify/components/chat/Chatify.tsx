import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';
import {Title} from './Title';
import * as Immutable from 'immutable';

import '../../css/chat.css';
import {ChannelList} from '../ChannelList';

export interface IChatifyStateProps {
    channelIds: Immutable.List<Uuid>;
}

export interface IChatifyDispatchProps  {
    readonly onChannelAdd: (text: string) => void;
}

export class Chatify extends React.PureComponent<IChatifyStateProps & IChatifyDispatchProps > {
    render() {
        return (
            <div id="container-fluid">
                <div className="row">
                    <div id="sidebar" className="col-md-2">
                        <ChannelList
                            channelsIds={this.props.channelIds}
                            onChannelAdd={this.props.onChannelAdd}
                        />
                    </div>
                    <div id="messageList" className="col-md-6">
                        <div className="container">
                            <Title/>
                        </div>
                        <div className="container">
                            <MessageList  />
                        </div>
                        <div className="container">
                            <SendForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
