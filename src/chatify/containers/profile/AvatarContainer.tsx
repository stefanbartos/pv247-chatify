import { connect } from 'react-redux';
import { Avatar, IAvatarDispatchProps } from '../../components/profile/Avatar';
import { Dispatch } from 'redux';
import { uploadAvatar } from '../../actions/profile/uploadAvatar';

const mapDispatchToProps = (dispatch: Dispatch): IAvatarDispatchProps => {
    return {
        onAvatarUpload: (file: File) => dispatch(uploadAvatar(file))
    };
};

export const AvatarContainer = connect<null, IAvatarDispatchProps>(null, mapDispatchToProps)(Avatar);
