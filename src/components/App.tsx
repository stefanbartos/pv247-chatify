import * as React from 'react';
import * as Const from '../Const';
import {Login} from './login/Login';
import {Chat} from './chat/Chat';


export class App extends React.PureComponent<{},{displayForm: String}> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayForm: Const.LOGIN
        };
    }

    renderForm = (displayForm: String) => {
        if (displayForm === Const.CHAT) {
            return <Chat eventHandler={this.eventHandler}/>;
        }
        else if (displayForm === Const.LOGIN) {
            return <Login eventHandler={this.eventHandler}/>;
        }
        return Const.RANDOM;
    };

    eventHandler = (displayForm: String) => {
        this.setState(() => {
            return{ displayForm };
        });
    };

    public render() {
        return this.renderForm(this.state.displayForm);
    }
}
