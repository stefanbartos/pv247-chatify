import * as React from 'react';

//TODO message list
const messages = [
    "Where is my project?",
    "Random message generated",
    "What is the meaning of life",
    "I am your father"
];


export class MessageList extends React.PureComponent {
    render() {
        return (
            <ul>
            {messages.map((message) =>
            <li>{message}</li>)}</ul>
            )


    }
}
