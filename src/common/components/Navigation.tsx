import * as React from 'react';
import {ProfilePicture} from '../../chatify/components/common/ProfilePicture';

export const Navigation = () => (
    <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <div className="navbar-header">
                <span className="navbar-brand mb-0 h1">PV247 Chatify</span>
                <ul className="nav navbar-nav navbar-right">
                    <ProfilePicture/>
                </ul>
            </div>
        </div>
    </nav>
);
