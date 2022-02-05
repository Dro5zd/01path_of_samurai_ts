import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

type NavbarRowPropsType = {
    title: string
    url: string
    icon: any
};

function NavbarRow(props: NavbarRowPropsType) {
    return (
        <div className={s.section}>
            <div className={s.navbar_item}>
                <NavLink to={props.url} className={navData => navData.isActive ? `${s.linkActive} ${s.link}` : s.link}>
                    {props.icon}
                    <h4 className={s.navbar_title}>{props.title}</h4>
                </NavLink>


            </div>
        </div>
    );
}


export default NavbarRow;