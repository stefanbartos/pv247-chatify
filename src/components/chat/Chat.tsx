import * as React from 'react';
import {SendForm} from "./SendForm";


export class Chat extends React.PureComponent {

    render() {
        return (
            <div className="app">
                {/*<Title />*/}
                {/*<MessageList />*/}
                <SendForm />
            </div>
        )
    }
}
