import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';
import {Sidebar} from '../channels/Sidebar';

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
                    {/*<Title />*/}
                    <MessageList/>
                    <SendForm/>
                </section>
            </div>
        );
    }
}
