import * as React from 'react';
import * as profilePicture from './profile-picture.png';
import { Link } from 'react-router-dom';
import { PROFILE, LOGIN } from '../../constants/routes';

interface INavigationPictureState {
    isExpanded: boolean;
}

export interface INavigationPicuteDispatchProps {
    logoutUser: () => void;
}

export class NavigationPicture extends React.PureComponent<INavigationPicuteDispatchProps, INavigationPictureState> {
    readonly state = {
        isExpanded: false
    };

    toggleDropdown = () => {
        this.setState((prevState) => {
            return {
                isExpanded: !prevState.isExpanded
            };
        });
    }

    render() {
        const showAttr = this.state.isExpanded ? 'show' : '';
        const menuClass = `dropdown-menu dropdown-menu-right position-absolute ${showAttr}`;
        const navDropdownClass = `nav-item dropdown ${showAttr}`;
        return (
            <li className={navDropdownClass} onClick={this.toggleDropdown}>
                <img
                    style={{ height: '60px', borderRadius: '50%' }}
                    src={profilePicture}
                    aria-expanded={this.state.isExpanded}
                />
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                    <Link to={PROFILE} className="dropdown-item">Profile</Link>
                    <Link to={LOGIN} className="dropdown-item" onClick={this.props.logoutUser}>Logout</Link>
                </div>
            </li>
        );
    }
}
