import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Login, ILoginProps } from '../components/login/Login';
import { loginUser } from '../actions/loginUser';

const mapDispatchToProps = (dispatch: Dispatch): ILoginProps => {
  return {
    onLogin: (email: string) => dispatch(loginUser(email))
  };
};

export const LoginContainer = connect<ILoginProps>(null, mapDispatchToProps)(Login);
