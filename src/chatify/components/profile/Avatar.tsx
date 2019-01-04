import * as React from 'react';
import { AvatarImage } from './AvatarImage';

interface IAvatarState {
    selectedFile?: File;
    isFileSelected: boolean;
}

export interface IAvatarStateProps {
    isFetchingAvatar: boolean;
    avatarUrl?: string;
}

export interface IAvatarDispatchProps {
    onAvatarUpload: (file: File) => void;
}

export class Avatar extends React.PureComponent<IAvatarDispatchProps & IAvatarStateProps, IAvatarState> {
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

    private onFileUpload = (): void => {
        if (this.state.selectedFile) {
            this.props.onAvatarUpload(this.state.selectedFile);
        }
    }

    render() {
        return (
            <div className="container avatar">
                <AvatarImage url={this.props.avatarUrl} />
                <div>
                    <input type="file" onChange={this.onFileSelect} />
                </div>
                <br />
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={this.onFileUpload}
                        disabled={!this.state.isFileSelected}>
                        Upload avatar
                    </button>
                </div>
            </div>
        );
    }
}
