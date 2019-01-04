import * as React from 'react';
import * as Picture from '../../images/default-profile.png';

export class Avatar extends React.PureComponent {
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
            <div className="container avatar">
                <img src={Picture} />
                <input type="file" onChange={this.onFileSelect} />
                <button onClick={this.onFileUpload}>Upload</button>
            </div>
        );
    }
}
