import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';


interface Props {
    eventHandler: any;
}


interface ChatState {

}


export class Chat extends React.PureComponent<Props, ChatState> {

    render() {
        return (
            <div className="app">
                {/*<Title />*/}
                <MessageList />
                <SendForm />
            </div>
        );
    }
}
