import * as React from 'react';
import { Field, FormikProps, withFormik, FieldProps } from 'formik';
import { IUserDetails } from '../../models/IUserDetails';

interface IUserDetailsFormData extends IUserDetails { }

const UserDetailsForm = (props: FormikProps<IUserDetailsFormData>) => {
    const { handleSubmit, isSubmitting, dirty } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div>
                    <Field
                        name="email"
                        render={({ field }: FieldProps<IUserDetailsFormData>) => (
                            <input {...field} type="text" readOnly className="form-control-plaintext" />
                        )}
                    />
                    <small className="form-text text-muted">Email cannot be changed.</small>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2">First name</label>
                <Field type="text" name="firstName" />
            </div>
            <div className="form-group row">
                <label className="col-sm-2">Last name</label>
                <Field type="text" name="lastName" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!dirty || isSubmitting}>
                Update profile
            </button>
        </form>
    );
};

export interface UserDetailsFormikDispatchProps {
    uploadData: (data: IUserDetails) => void;
}

export interface UserDetailsFormikStateProps {
    email: string;
    firstName: string;
    lastName: string;
}

export const UserDetails = withFormik<UserDetailsFormikDispatchProps & UserDetailsFormikStateProps,
    IUserDetailsFormData>({
        enableReinitialize: true,
        mapPropsToValues: (props) => {
            return {
                email: props.email,
                firstName: props.firstName,
                lastName: props.lastName
            };
        },
        handleSubmit: (values, { props }) => {
            props.uploadData(values);
            console.log(values);
        }
    })(UserDetailsForm);
