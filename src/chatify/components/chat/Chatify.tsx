import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';
import {Sidebar} from '../channels/Sidebar';
import {Title} from './Title';

import '../../css/chat.css';

interface Props {
    eventHandler: any;
}

interface ChatState {

}

export class Chatify extends React.PureComponent<Props, ChatState> {
    render() {
        return (
            <div>
                <div id="container-fluid" className="row">
                    <div id="sidebar" className="col-md-2">
                        <Sidebar/>
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
