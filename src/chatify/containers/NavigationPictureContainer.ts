import { INavigationPicuteDispatchProps, NavigationPicture } from './../components/common/NavigationPicture';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logoutUser } from '../actions/authentication/logoutUser';

const mapDispatchToProps = (dispatch: Dispatch): INavigationPicuteDispatchProps => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export const NavigationPictureContainer = connect(null, mapDispatchToProps)(NavigationPicture);
