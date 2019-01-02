import * as React from 'react';

interface IErrorBoundaryState {
    errorFound: boolean;
}

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

export class ErrorBoundary extends React.PureComponent<IErrorBoundaryProps, IErrorBoundaryState> {
    readonly state = {
        errorFound: false
    };

    componentDidCatch(error: Error, errorInfo: Object) {
        this.setState(() => ({
            errorFound: true
        }));

        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.errorFound) {
            return (
                <div>
                    <h2>We're sorry. Something went wrong.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}
