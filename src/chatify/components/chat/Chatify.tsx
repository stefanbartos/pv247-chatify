import * as React from 'react';
// import {SendForm} from './SendForm';
import {Title} from './Title';
import * as Immutable from 'immutable';

import {ChannelList} from '../ChannelList';
import {MessageList} from './MessageList';
import {IChatMessage} from '../../models/IChatMessage';

export interface IChatifyStateProps {
    channelIds: Immutable.List<Uuid>;
    messageIdsList: Immutable.List<Uuid>;
}

export interface IChatifyDispatchProps  {
    readonly onChannelAdd: (text: string) => void;
    readonly onSendMessage: (chanelId: Uuid, chatMessage: IChatMessage) => void;
    readonly onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => void;
}

export class Chatify extends React.PureComponent<IChatifyStateProps & IChatifyDispatchProps > {
    render() {
        return <div id="container-fluid">
            <div className="row">
                <div id="sidebar" className="col-md-3">
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
                        <MessageList
                            messageIdsList={this.props.messageIdsList}
                            onSendMessage={this.props.onSendMessage}
                            channelId={'0'}/>
                    </div>
                    {/*<div className="container">*/}
                    {/*<SendForm/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>;
    }
}
