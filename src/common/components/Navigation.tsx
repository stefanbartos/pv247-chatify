import * as React from 'react';
import { NavigationPictureContainer } from '../../chatify/containers/NavigationPictureContainer';

export const Navigation = () => (
    <nav className="navbar sticky-top navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">PV247 Chatify</span>
        <ul className="nav navbar-nav ml-auto">
            <NavigationPictureContainer />
        </ul>
    </nav>
);
