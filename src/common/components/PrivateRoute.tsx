import * as React from 'react';
import { Route, RouteProps, Redirect, RouteComponentProps } from 'react-router';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute: React.StatelessComponent<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={componentProps =>
            false
                ? <Component {...componentProps} />
                : <Redirect
                    to={{ pathname: '/login' }}
                />
        } />
);

PrivateRoute.displayName = 'PrivateRoute';
