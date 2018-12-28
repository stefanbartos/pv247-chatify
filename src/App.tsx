import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './common/components/Navigation';
import { ChatifyContainer } from './chatify/containers/Chatify';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { NotFound } from './common/components/NotFound';
import { Profile } from './chatify/components/Profile';
import { store } from './store';
import { LoginContainer } from './chatify/containers/LoginContainer';
import { PrivateRoute } from './common/components/PrivateRoute';

interface Props {

}

interface AppState {
    displayForm: String;
}

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
                        <Route path="/Login" component={LoginContainer} />
                        <PrivateRoute path="/Profile" component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
