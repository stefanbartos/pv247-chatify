import * as React from 'react';


interface SendFormProps {

}

interface SendFormState {

}

export class SendForm extends React.PureComponent<SendFormProps, SendFormState> {

    render() {
        return (
            <div className="row">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter your message..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-info btn-block" type="button">Send</button>
                        </span>
                </div>
            </div>
        );
    }
}
