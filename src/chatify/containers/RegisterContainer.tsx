import { connect } from 'react-redux';
import { Register, IRegisterProps } from '../components/register/Register';
import { Dispatch } from 'redux';
import { registerUser } from '../actions/authentication/registerUser';

const mapDispatchToProps = (dispatch: Dispatch): IRegisterProps => {
    return {
        onRegister: (email: string) => dispatch(registerUser(email))
    };
};

export const RegisterContainer = connect(null, mapDispatchToProps)(Register);
