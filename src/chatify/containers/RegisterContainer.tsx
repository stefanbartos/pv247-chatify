import { connect } from 'react-redux';
import {
    Register,
    IRegisterDispatchProps,
    IRegisterStateProps
} from '../components/register/Register';
import { Dispatch } from 'redux';
import { registerUser } from '../actions/authentication/registerUser';
import { IState } from '../../common/IState';

const mapDispatchToProps = (dispatch: Dispatch): IRegisterDispatchProps => {
    return {
        onRegister: (email: string) => dispatch(registerUser(email))
    };
};

const mapStateToProps = (state: IState): IRegisterStateProps => {
    return {
        isRegistering: state.chatify.isRegistering
    };
};

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
