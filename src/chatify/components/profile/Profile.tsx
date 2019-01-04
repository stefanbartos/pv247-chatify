import * as React from 'react';
import { UserDetailsContainer } from '../../containers/profile/UserDetailsContainer';
import { ClipLoader } from 'react-spinners';
import { AvatarContainer } from '../../containers/profile/AvatarContainer';

export interface IProfileStateProps {
    readonly isFetchingUserDetails: boolean;
    readonly isFetchingAvatar: boolean;
}

export interface IProfileDispatchProps {
    fetchUserProfile: () => void;
}

export class Profile extends React.PureComponent<IProfileDispatchProps & IProfileStateProps> {
    readonly state = {
        selectedFile: null
    };

    componentDidMount() {
        this.props.fetchUserProfile();
    }

    render() {
        return (
            <div className="container profile">
                <h1>Profile</h1>
                <div className="container">
                    <h2>Avatar</h2>
                    {this.props.isFetchingAvatar ? <ClipLoader /> : <AvatarContainer />}
                </div>
                <div className="container">
                    <h2>User details</h2>
                    {this.props.isFetchingUserDetails ? <ClipLoader /> : <UserDetailsContainer />}
                </div>

            </div>
        );
    }
}
