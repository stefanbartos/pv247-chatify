import * as React from 'react';
import * as Const from './chatify/constants/appConstants';
import {Login} from './chatify/components/login/Login';
import {Chatify} from './chatify/components/chat/Chatify';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {getInitialChannels} from './chatify/utils/initialChannels';
import {rootReducer} from './common/rootReducer';
import {Navigation} from './common/components/Navigation';
import {getInitialMessages} from "./chatify/utils/initialMessages";

interface Props {

}

interface AppState {
    displayForm: String;
}

const initialState = {
    chatify: {
        channels: getInitialChannels(),
        messageList: getInitialMessages(),
    }
};

const store = createStore(rootReducer, initialState);

export class App extends React.PureComponent<Props, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayForm: Const.LOGIN
        };
    }

    renderForm = (State: String) => {
        if (State === Const.LOGIN) {
            return <Login eventHandler={this.eventHandler}/>;
        }
        return (
            <Provider store={store}>
                <>
                    <Navigation/>
                    <main>
                        <Chatify eventHandler={this.eventHandler}/>
                    </main>
                </>
            </Provider>
        );
    };

    eventHandler = (displayForm: String) => {
        this.setState(() => {
            return {displayForm};
        });
    };

    public render() {
        console.log(store);
        return this.renderForm(this.state.displayForm);
    }
}
