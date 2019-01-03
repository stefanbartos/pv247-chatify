import { Dispatch } from 'redux';
import { uploadUserDetails } from '../../actions/profile/updateProfileUserDetails';
import { UserDetailsFormik } from '../../components/profile/UserDetails';
import { connect } from 'react-redux';
import { IState } from '../../../common/IState';
import { IUserDetails } from '../../models/IUserDetails';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        uploadData: (data: IUserDetails) => dispatch(uploadUserDetails(data))
    };
};

const mapStateToProps = (state: IState) => {
    const { userDetails } = state.chatify.profile;

    const details: IUserDetails = {
        email: 'def',
        firstName: 'def',
        lastName: 'def'
    };

    return userDetails ? userDetails : details;
};

export const UserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetailsFormik);
