import React from 'react';
import {FormikErrors, FormikProps, useFormik} from 'formik';

interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Must be more than 7 characters';
    }

    return errors;
};


const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors} = props;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                type="email"
                placeholder={'Email Address'}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <input
                id="password"
                name="password"
                type="password"
                placeholder={'Password'}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit">Login</button>
        </form>
    );
};

const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}

export default Login


