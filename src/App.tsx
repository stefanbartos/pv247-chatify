import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './common/components/Navigation';
import { ChatifyContainer } from './chatify/containers/ChatifyContainer';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { NotFound } from './common/components/NotFound';
import { createChatifyStore } from './createChatifyStore';
import { LoginContainer } from './chatify/containers/LoginContainer';
import { PrivateRoute } from './common/components/PrivateRoute';
import { RegisterContainer } from './chatify/containers/RegisterContainer';
import * as routes from './chatify/constants/routes';
import { ErrorBoundary } from './common/components/ErrorBounderies';
import { ProfileContainer } from './chatify/containers/profile/ProfileContainer';

interface Props {

}

interface AppState {
    displayForm: String;
}

const store = createChatifyStore();

export class App extends React.PureComponent<Props, AppState> {
    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={routes.ROOT} render={() => (
                                <>
                                    <Navigation />
                                    <main>
                                        <ChatifyContainer />
                                    </main>
                                </>
                            )} />
                            <Route path={routes.LOGIN} component={LoginContainer} />
                            <Route path={routes.REGISTER} component={RegisterContainer} />
                            <PrivateRoute path={routes.PROFILE} component={ProfileContainer} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}
