import * as React from 'react';
import {IChatMessage} from '../../models/IChatMessage';

export interface MessageProps {
    readonly id: Uuid;
    readonly index: number;
}

export interface IMessageStateProps {
    readonly message: IChatMessage;
}

export interface IMessageDispatchProps {
    readonly onClick: () => void;
}

type IProps = MessageProps & IMessageStateProps & IMessageDispatchProps;


export class Message extends React.PureComponent<IProps, any> {
    public render() {
        const {index, message} = this.props;

        return (

            <li key={index} className="nav-item">
                <div>{message.chatMessageText}</div>
            </li>
        );
    }
}
