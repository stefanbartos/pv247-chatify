import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';


export class Chat extends React.PureComponent<{eventHandler: any;}, {}> {

    render() {
        return (
            <div className="app">
                {/*<Title />*/}
                <MessageList />
                <SendForm />
            </div>
        )
    }
}
