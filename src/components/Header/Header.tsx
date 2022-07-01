import logo from '../../assets/img/B.A.D._logo4.png';
import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    isAuth: boolean
}

const Header = (props: PropsType) => {
    return (<header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header


