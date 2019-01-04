import * as React from 'react';
import { AvatarImage } from './AvatarImage';

interface IAvatarState {
    selectedFile?: File;
    isFileSelected: boolean;
}

export class Avatar extends React.PureComponent<null, IAvatarState> {
    readonly state: IAvatarState = {
        isFileSelected: false
    };

    private onFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files === null) {
            this.setState(() => ({
                isFileSelected: false,
                selectedFile: undefined
            }));
            return;
        }
        const inputFile = e.target.files[0];

        this.setState(() => ({
            selectedFile: inputFile,
            isFileSelected: true
        }));
    }

    private onFileUpload = (e: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(e);
    }

    render() {
        return (
            <div className="container avatar">
                <AvatarImage url={'https://www.w3schools.com/w3css/img_lights.jpg'} />
                <div>
                    <input type="file" onChange={this.onFileSelect} />
                </div>
                <br />
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={this.onFileUpload}
                        disabled={this.state.isFileSelected}>
                        Upload avatar
                    </button>
                </div>
            </div>
        );
    }
}
