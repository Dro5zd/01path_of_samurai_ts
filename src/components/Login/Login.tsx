import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {loginTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../../redux/store-redux';

interface FormValues {
    email: string;
    password: string;
    rememberMe: boolean
}

const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Must be more than 7 characters';
    }

    return errors;
};

type LoginFormPropsType = {
    loginTC: (values: FormValues) => void
}


const LoginForm = (props: LoginFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
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
                {...formik.getFieldProps('rememberMe')}
            />

            <button type="submit">Login</button>

        </form>
    );
};

type LoginPropsType = {
    loginTC: (values: FormValues) => void
    isAuth: boolean
}

type mapStateToPropsPropsType = {
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm loginTC={props.loginTC}/>
    </div>
}

const mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)


