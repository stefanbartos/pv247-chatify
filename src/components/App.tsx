import * as React from 'react';
import * as Const from '../Const';
import {Login} from './login/Login';
import {Chat} from './chat/Chat';

interface Props {

}


interface State {
    displayForm: String;
}


export class App extends React.PureComponent<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayForm: Const.LOGIN
        };
    }

    renderForm = (State: String) => {
        if (State === Const.CHAT) {
            return <Chat eventHandler={this.eventHandler}/>;
        }
        else if (State === Const.LOGIN) {
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
