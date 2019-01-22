import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { ErrorsContainer } from '../../containers/ErrorsContainer';
import '../../css/register.css';

export interface IRegisterProps {
    onRegister(email: string): void;
}

interface IRegisterState {
    email: string;
}

export class Register extends React.PureComponent<IRegisterProps, IRegisterState> {
    readonly state = {
        email: ''
    };

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        this.setState(() => ({
            email: value
        }));
    }

    private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!this.state.email) {
            return;
        }

        this.props.onRegister(this.state.email);
    }

    render() {
        const { email } = this.state;
        return (
            <div className="container register-page h-100">
                <div className="row justify-content-md-center h-100">
                    <div className="card-wrapper">
                        <div className="card fat">
                            <div className="card-body">
                                <h4 className="card-title">
                                    Register
                                </h4>
                                <form className="form-register" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </div>
                                    <div className="form-group m-0">
                                        <button className="btn btn-primary btn-block">Register</button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        Already registered?&nbsp;
                                        <Link to={routes.LOGIN}>Login</Link>
                                    </div>
                                    <div className="row">
                                        <ErrorsContainer key="errors" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
