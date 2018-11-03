import * as React from 'react';
import * as Const from './chatify/constants/appConstants';
import {Login} from './chatify/components/login/Login';
import {Chat} from './chatify/components/chat/Chat';
import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import {getInitialChannels} from './chatify/utils/initialChannels';
import {rootReducer} from './common/rootReducer';

interface Props {

}


interface AppState {
    displayForm: String;
}

const initialState = {
    chatify: {
        channels: getInitialChannels(),
    }
};

const state = createStore(rootReducer, initialState);

export class App extends React.PureComponent<Props, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayForm: Const.LOGIN
        };
    }

    renderForm = (State: String) => {
        if (State === Const.CHAT) {
            return <Chat eventHandler={this.eventHandler}/>;
        }
        else if (State === Const.LOGIN) {
            return <Login eventHandler={this.eventHandler}/>;
        }
        return Const.RANDOM;
    };

    eventHandler = (displayForm: String) => {
        this.setState(() => {
            return {displayForm};
        });
    };

    public render() {
        // TODO : return <Provider store={store}>
        console.log(state);
        return this.renderForm(this.state.displayForm);
    }
}
