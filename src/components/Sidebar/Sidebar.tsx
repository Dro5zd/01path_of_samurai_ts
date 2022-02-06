import React from 'react';
import s from './Sidebar.module.css'
import {dialogItemType} from "../../redux/state";


type SidebarPropsType = {
    contactItem: dialogItemType[]
}

const Sidebar = (props: SidebarPropsType) => {

    let contactsElement = props.contactItem.map(c => <img src={c.avatar} alt="ava1"/>)
    let contactsName = props.contactItem.map(c => <span className={s.contactName}>{c.name}</span>)
    return (
        <div className={s.side}>

            <h4>Контакты</h4>
            <div className={s.contactItem}>
                <div className={s.contactLogo}>
                    {contactsElement}
                </div>
                <div className={s.contactName}>
                    {contactsName}
                </div>
            </div>


        </div>
    );
};

export default Sidebar;