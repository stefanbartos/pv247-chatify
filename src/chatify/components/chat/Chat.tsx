import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageListCom} from './MessageList';
import {Sidebar} from '../channels/Sidebar';
import {Title} from './Title';

import '../../css/chat.css';
import {ProfilePicture} from '../common/ProfilePicture';

interface Props {
    eventHandler: any;
}

interface ChatState {

}

export class Chat extends React.PureComponent<Props, ChatState> {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1">PV247 Chatify</span>
                        <ul className="nav navbar-nav navbar-right">
                            <ProfilePicture/>
                        </ul>
                    </div>
                </nav>
                <div id="container-fluid" className="row">
                    <Sidebar/>
                    <div id="main" className="col-md-6">
                        <div className="container">
                            <Title/>
                        </div>
                        <div className="container">
                            <MessageListCom  />
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
