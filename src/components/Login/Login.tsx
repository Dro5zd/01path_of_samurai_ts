import logo from '../../logo-abm.png';
import React from 'react';
import s from './Login.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    isAuth: boolean
}

const Login = (props: PropsType) => {
    return (<header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Login


