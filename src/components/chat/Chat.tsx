import * as React from 'react';
import {ProfilePicture} from '../common/ProfilePicture';
// import {SendForm} from './SendForm';
// import {MessageList} from './MessageList';
// import {Sidebar} from '../channels/Sidebar';

import '../../css/chat.css';

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
                        <span className="navbar-brand mb-0 h1">PV247</span>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle caret-off" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">Profile</li>
                                    <li className="dropdown-item">Logout</li>
                                </ul>
                            </li>
                            <ProfilePicture/>
                        </ul>
                    </div>
                </nav>
                {/*<div id="container" className="app">*/}
                {/*<Sidebar/>*/}
                {/*<section id="main">*/}
                {/*/!*<Title />*!/*/}
                {/*<MessageList/>*/}
                {/*<SendForm/>*/}
                {/*</section>*/}
                {/*</div>*/}
            </div>
        );
    }
}
