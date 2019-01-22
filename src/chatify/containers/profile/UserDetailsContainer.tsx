import { Dispatch } from 'redux';
import { uploadUserDetails } from '../../actions/profile/updateProfileUserDetails';
import { UserDetails } from '../../components/profile/UserDetails';
import { connect } from 'react-redux';
import { IState } from '../../../common/IState';
import { IUserDetails } from '../../models/IUserDetails';
import { getPersistedEmail } from '../../../common/localStorageUtils';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        uploadData: (data: IUserDetails) => dispatch(uploadUserDetails(data))
    };
};

const mapStateToProps = (state: IState) => {
    const { userDetails } = state.chatify.profile;

    const defaultValues: IUserDetails = {
        firstName: '',
        lastName: '',
        email: getPersistedEmail()!,
        avatarId: undefined
    };

    return userDetails ? userDetails : defaultValues;
};

export const UserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetails);
