import * as React from 'react';
import { Link } from 'react-router-dom';

interface IRegisterState {
    email: string;
}

export class Register extends React.PureComponent<any, IRegisterState> {
    readonly state = {
        email: ''
    };

    private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!this.state.email) {
            return;
        }
    }

    render() {
        const { email } = this.state;
        return (
            <div className="col-md-6 offset-md-3">
                <h1>Register</h1>
                <form className="form-register" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        Already registered? <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}
