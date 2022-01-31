import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

type DialogsItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;