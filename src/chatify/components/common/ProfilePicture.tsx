import * as React from 'react';
import * as profilePicture from './profile-picture.png';

export class ProfilePicture extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            isExpanded: false
        };
    }

    toggleDropdown() {
        this.setState(function (state: any) {
            return {
                isExpanded: !state.isExpanded
            };
        });
    }

    render() {
        const menuClass = `dropdown-menu${this.state.isExpanded ? ' show' : ''} col`;
        return (
            <div className="dropdown" onClick={this.toggleDropdown}>
                <img className="profile-picture img-circle"
                     src={profilePicture} />
                <ul className={menuClass} aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item"><a>Profile</a></li>
                    <li className="dropdown-item"><a>Logout</a></li>
                </ul>
            </div>
        );
    }
}
