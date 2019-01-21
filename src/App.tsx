import * as React from 'react';
import { Provider } from 'react-redux';
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
import './chatify/css/app.css';

const store = createChatifyStore();

export class App extends React.PureComponent {
    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <PrivateRoute exact path={routes.ROOT} component={ChatifyContainer} />
                            <PrivateRoute path={routes.CHANNEL_ID} component={ChatifyContainer} />
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
