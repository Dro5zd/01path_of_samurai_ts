import React from 'react';
import s from './Sidebar.module.css'
import {dialogItemType} from "../../redux/state";


type SidebarPropsType = {
    contactItem: dialogItemType[]
}

const Sidebar = (props: SidebarPropsType) => {

    return (
        <div className={s.side}>
            <h4>Контакты</h4>
            {props.contactItem.map(i => <div className={s.contactItem}><img className={s.contactLogo} src={i.avatar} alt="ava1"/><span
                className={s.contactName}>{i.name}</span></div>)}
        </div>
    );
};


export default Sidebar;    