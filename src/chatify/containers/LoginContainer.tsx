import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Login, ILoginDispatchProps } from '../components/login/Login';
import { loginUser } from '../actions/authentication/loginUser';

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => {
  return {
    onLogin: (email: string, redirect: () => void) => dispatch(loginUser(email, redirect))
  };
};

// @ts-ignore
export const LoginContainer = connect(null, mapDispatchToProps)(Login);
