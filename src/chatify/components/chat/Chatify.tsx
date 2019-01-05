import * as React from 'react';
import { Title } from './Title';
import * as Immutable from 'immutable';
import { ChannelList } from '../ChannelList';
import { MessageList } from './MessageList';
import { IChatMessage } from '../../models/IChatMessage';
import { Navigation } from '../../../common/components/Navigation';
import { RouteComponentProps } from 'react-router';
import { CHANNEL_ID } from '../../constants/routes';

interface IChatifyRouterProps {
    match: string;
    id?: string;
}

export interface IChatifyOwnProps extends RouteComponentProps<IChatifyRouterProps> { }

export interface IChatifyStateProps {
    channelIds: Immutable.List<Uuid>;
    messageIdsList: Immutable.List<Uuid>;
}

export interface IChatifyDispatchProps {
    readonly onChannelAdd: (text: string) => void;
    readonly onChannelClick: (channelId: Uuid) => void;
    readonly onSendMessage: (chanelId: Uuid, chatMessage: IChatMessage) => void;
    readonly onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => void;
}

export class Chatify extends React.PureComponent<IChatifyStateProps & IChatifyDispatchProps & IChatifyOwnProps> {
    render() {
        const { match } = this.props;
        const isChannelSelected = match.path === CHANNEL_ID;
        return (
            <>
                <Navigation />
                <div id="container">
                    <div className="row">
                        <div id="sidebar" className="col-md-3">
                            <ChannelList
                                channelsIds={this.props.channelIds}
                                onChannelAdd={this.props.onChannelAdd}
                            />
                        </div>
                        {isChannelSelected
                            ?
                            <div id="messageList" className="col-md-6">
                                <div className="container">
                                    <Title />
                                </div>
                                <div className="container">
                                    <MessageList
                                        messageIdsList={this.props.messageIdsList}
                                        onSendMessage={this.props.onSendMessage}
                                        channelId={match.params.id ? match.params.id : ''} />
                                </div>
                            </div>
                            :
                            <div className="col-md-5" style={{ height: '500px' }}>
                                Select channel please
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}
