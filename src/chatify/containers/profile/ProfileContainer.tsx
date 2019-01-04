import { connect } from 'react-redux';
import { Profile, IProfileDispatchProps, IProfileStateProps } from '../../components/profile/Profile';
import { Dispatch } from 'redux';
import { fetchUserProfile } from '../../actions/profile/fetchUserProfile';
import { IState } from '../../../common/IState';

const mapDispatchToProps = (dispatch: Dispatch): IProfileDispatchProps => {
    return {
        fetchUserProfile: () => dispatch(fetchUserProfile())
    };
};

const mapStateToProps = (state: IState): IProfileStateProps => {
    return {
        isFetchingUserDetails: state.chatify.profile.isFetchingUserDetails
    };
};

export const ProfileContainer = connect<IProfileStateProps, IProfileDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
