import * as React from 'react';
import * as Picture from '../../images/default-profile.png';

export class Profile extends React.PureComponent {
    readonly state = {
        selectedFile: null
    };

    private onFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files === null) {
            return;
        }
        const inputFile = e.target.files[0];

        this.setState(() => ({
            selectedFile: inputFile
        }));
    }

    private onFileUpload = (e: any): void => {
        console.log(e);
    }

    render() {
        return (
            <div className="profile">
                <h2>Profile</h2>
                <img src={Picture} />
                <input type="file" onChange={this.onFileSelect} />
                <button onClick={this.onFileUpload}>Upload</button>
                <form className="form-profile">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            // className="form-control"
                            name="email"
                            readOnly />
                    </div>
                </form>
            </div>
        );
    }
}
