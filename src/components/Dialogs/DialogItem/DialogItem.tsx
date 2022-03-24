import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'
import {DialogItemType} from '../../../redux/dialogs-reducer';


const DialogItem = (props: DialogItemType) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={s.item}>
            <NavLink to={path}><img src={props.avatar} alt="avatar"/>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;