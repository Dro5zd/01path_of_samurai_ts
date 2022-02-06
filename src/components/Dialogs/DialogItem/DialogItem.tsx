import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'
import {dialogItemType} from "../../../redux/state";


const DialogItem = (props: dialogItemType) => {
    let path = '/dialogs/' + props.id
    console.log(path)
    return (
        <div className={s.item}>
            <NavLink to={path}><img src={props.avatar} alt="avatar"/>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;