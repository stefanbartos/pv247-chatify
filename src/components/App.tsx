import * as React from 'react';
import * as Const from '../Const';
import {Login} from "./login/Login";


interface State {
     displayForm: string
}


export class App extends React.PureComponent<State> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayForm: Const.CHAT
        };
    }

    eventHandler = (displayForm: String) => {
        this.setState(() => {
            return{ displayForm };
        });
    };

    renderForm = () => {
        return <Login eventHandler={this.eventHandler}/>;
    };

    public render() {
        return this.renderForm();
    }
}
