import { connect } from 'react-redux';
import { Errors, IErrorsDispatchProps, IErrorsStateProps } from '../../common/components/Errors';
import { IState } from '../../common/IState';
import { Dispatch } from 'redux';
import { dismissError } from '../actions/error/actionCreators';

const mapStateToProps = (state: IState): IErrorsStateProps => {
    return {
        errors: state.chatify.errors
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IErrorsDispatchProps => {
    return {
        onDismissClick: (errorId: Uuid) => dispatch(dismissError(errorId))
    };
};
export const ErrorsContainer = connect<IErrorsStateProps, IErrorsDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Errors);
