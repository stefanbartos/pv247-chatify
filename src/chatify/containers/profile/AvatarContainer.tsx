import { connect } from 'react-redux';
import { Avatar, IAvatarDispatchProps, IAvatarStateProps } from '../../components/profile/Avatar';
import { Dispatch } from 'redux';
import { uploadAvatar } from '../../actions/profile/uploadAvatar';
import { IState } from '../../../common/IState';

const mapDispatchToProps = (dispatch: Dispatch): IAvatarDispatchProps => {
    return {
        onAvatarUpload: (file: File) => dispatch(uploadAvatar(file))
    };
};

const mapStateToProps = (state: IState): IAvatarStateProps => {
    return {
        avatarUrl: state.chatify.profile.avatarUrl
    };
};

export const AvatarContainer = connect<IAvatarStateProps, IAvatarDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Avatar);
