import * as React from 'react';
import * as Const from './chatify/constants/appConstants';
import {Login} from './chatify/components/login/Login';
import {Chat} from './chatify/components/chat/Chat';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));

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
            return (
                <Provider store={store}>
                    <Chat eventHandler={this.eventHandler}/>
                </Provider>
            );
        }
        else if (State === Const.LOGIN) {
            return <Login eventHandler={this.eventHandler}/>;
        }
        return (
            // TODO return provider -> done
            <Provider store={store}>
                <Chat eventHandler={this.eventHandler}/>
            </Provider>
        )
    };

    eventHandler = (displayForm: String) => {
        this.setState(() => {
            return {displayForm};
        });
    };

    public render() {
        console.log(state);
        return this.renderForm(this.state.displayForm);
    }
}
