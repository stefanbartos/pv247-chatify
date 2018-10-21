import * as React from 'react';
import * as Const from '../../Const';

interface Props {
    eventHandler: any;
}

interface State {

}

export class Login extends React.PureComponent<Props, State> {
    public render() {
        return (
            <div className="container">
                <form className="form-login">
                    <h2 className="form-login-heading">Please log in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                        <label><input type="checkbox" value="remember-me"/> Remember me</label>
                    </div>
                    <a href="#" onClick={() => this.props.eventHandler(Const.CHAT)}>
                        <button className="btn btn-lg btn-info btn-block" type="submit">Log in</button>
                    </a>
                </form>
            </div>
        );
    }
}
