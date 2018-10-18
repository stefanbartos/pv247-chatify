import * as React from 'react';
import * as Const from '../../Const';


export class Login extends React.PureComponent<{eventHandler: any;}, {}> {
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
                    <div className="form-group">
                        <button onClick={() => this.props.eventHandler(Const.CHAT)} type="submit">Log in</button>
                    </div>
                </form>
            </div>
        );
    }
}
