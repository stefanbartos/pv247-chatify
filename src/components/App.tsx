import * as React from 'react';
import * as Const from '../constants/appConstants';
import {Login} from './login/Login';
import {Chat} from './chat/Chat';

interface Props {

}


interface AppState {
    displayForm: String;
}


export class App extends React.PureComponent<Props, AppState> {
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
            return {displayForm};
        });
    };

    public render() {
        return this.renderForm(this.state.displayForm);
    }
}
