import * as React from "react";
import "./../../css/Login.css";
import {FormEvent} from "react";
//import {Redirect} from "react-router";


interface Props {

}

interface State {
    email: string
    password: string
}

export class Login extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    /*
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    */

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //this.props.history.push("/login");
    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input type="text" value={this.state.email} />

                    <label>Password</label>
                    <input type="password" value={this.state.password} />



                    <input type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
}
