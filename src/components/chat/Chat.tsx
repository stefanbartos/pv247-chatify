import * as React from 'react';
import {SendForm} from './SendForm';
import {MessageList} from './MessageList';


interface Props {
    eventHandler: any
}


interface State {

}


export class Chat extends React.PureComponent<Props, State> {

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
