import * as React from 'react';
import { Login } from './chatify/components/login/Login';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getInitialChannels } from './chatify/utils/initialChannels';
import { rootReducer } from './common/rootReducer';
import { Navigation } from './common/components/Navigation';
import { getInitialMessages } from './chatify/utils/initialMessages';
import { ChatifyContainer } from './chatify/containers/Chatify';
import thunkMiddleware from 'redux-thunk';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { NotFound } from './common/components/NotFound';
import { Profile } from './chatify/components/Profile';

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

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

export class App extends React.PureComponent<Props, AppState> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <>
                                <Navigation />
                                <main>
                                    <ChatifyContainer />
                                </main>
                            </>
                        )} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Profile" component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
