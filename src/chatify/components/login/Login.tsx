import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import * as PropTypes from 'prop-types';
import * as routes from '../../constants/routes';

export interface ILoginDispatchProps {
    onLogin(email: string, redirect: () => void): void;
}

export interface ILoginOwnProps extends RouteComponentProps<any> { }

interface ILoginState {
    email: string;
    password: string;
    submitted: boolean;
}

export class Login extends React.PureComponent<ILoginDispatchProps & ILoginOwnProps, ILoginState> {
    static displayName = 'Login';

    static propTypes = {
        onLogin: PropTypes.func.isRequired
    };

    readonly state = {
        email: '',
        password: '',
        submitted: false
    };

    private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!this.state.email) {
            return;
        }
        this.setState(() => ({
            submitted: true
        }));

        const redirect = () => this.props.history.push('/');

        this.props.onLogin(this.state.email, redirect);
    };

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input = e.target.value;
        this.setState(() => ({
            password: input
        }));
    };

    public handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // 'e.target.value' must be assigned to variable
        // see: https://www.duncanleung.com/blog/2017-08-14-fixing-react-warnings-synthetic-events-in-setstate/
        const input = e.target.value;
        this.setState(() => ({
            email: input
        }));
    };

    public render() {
        const { email, password, submitted } = this.state;
        return (
            <div className="col-md-6 offset-md-3">
                <h2>Login</h2>
                <form className="form-login" onSubmit={this.onSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.handleEmailChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.handlePasswordChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to={routes.REGISTER} className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}
