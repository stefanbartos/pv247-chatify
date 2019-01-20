import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Login, ILoginDispatchProps, ILoginStateProps } from '../components/login/Login';
import { loginUser } from '../actions/authentication/loginUser';
import { IState } from '../../common/IState';

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => {
  return {
    onLogin: (email: string, redirect: () => void) => dispatch(loginUser(email, redirect))
  };
};

const mapStateToProps = (state: IState): ILoginStateProps => {
  return {
    isLoggingIn: state.chatify.isLoggingIn
  };
};

// @ts-ignore
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
