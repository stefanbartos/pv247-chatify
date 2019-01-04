import { connect } from 'react-redux';
import { Profile, IProfileDispatchProps } from '../../components/profile/Profile';
import { Dispatch } from 'redux';
import { fetchUserProfile } from '../../actions/profile/fetchUserProfile';

const mapDispatchToProps = (dispatch: Dispatch): IProfileDispatchProps => {
    return {
        fetchUserProfile: () => dispatch(fetchUserProfile())
    };
};

export const ProfileContainer = connect<IProfileDispatchProps>(null, mapDispatchToProps)(Profile);
