import logo from '../../assets/img/B.A.D._logo4.png';
import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {loginTC, logOutTC} from '../../redux/auth-reducer';
import {useDispatch} from 'react-redux';

type PropsType = {
    login: string | null
    isAuth: boolean
    logOutTC: ()=>void
}

const Header = (props: PropsType) => {

    return (<header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <>{props.login} <button onClick={props.logOutTC}>Logout</button> </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header


