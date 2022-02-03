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
                {props.icon}
                <h4>
                    <NavLink to={props.url} className={navData => navData.isActive ? s.active : s.item}>{props.title}</NavLink>
                </h4>

            </div>
        </div>
    );
}



export default NavbarRow;