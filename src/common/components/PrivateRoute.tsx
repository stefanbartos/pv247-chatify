import * as React from 'react';
import { Route, RouteProps, Redirect, RouteComponentProps } from 'react-router';
import * as routes from '../../chatify/constants/routes';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute: React.StatelessComponent<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={componentProps =>
            // TODO: replace false with information that user is authenticated
            true
                ? <Component {...componentProps} />
                : <Redirect
                    to={{
                        pathname: routes.LOGIN,
                        state: {
                            from: componentProps.location,
                            requiresAuth: true
                        }
                    }}
                />
        } />
);

PrivateRoute.displayName = 'PrivateRoute';
