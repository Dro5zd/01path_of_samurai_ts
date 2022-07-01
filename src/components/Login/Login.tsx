import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {loginTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

interface FormValues {
    email: string;
    password: string;
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


const LoginForm = (props: any) => {
    // const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            props.loginTC(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                type="email"
                placeholder={'Email Address'}
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            <input
                id="password"
                type="password"
                placeholder={'Password'}
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

            <input
                id="checkbox"
                type="checkbox"
                {...formik.getFieldProps('checkbox')}
            />


            <button type="submit">Login</button>

        </form>
    );
};

type LoginPropsType = {
    loginTC: () => void
}

const Login = (props: any) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm loginTC={props.loginTC}/>
    </div>
}

export default connect(null, {loginTC})(Login)


