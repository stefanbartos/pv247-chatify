import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';
import {Sidebar} from '../channels/Sidebar';
import {Title} from './Title';

interface Props {
    eventHandler: any;
}


interface ChatState {

}


export class Chat extends React.PureComponent<Props, ChatState> {

    render() {
        return (
            <div id="container" className="app">
                <Sidebar/>
                <section id="main">
                    <div className="container">
                        <Title />
                    </div>
                    <div className="container">
                        <MessageList/>
                    </div>
                    <div className="container">
                        <SendForm/>
                    </div>
                </section>
            </div>
        );
    }
}
