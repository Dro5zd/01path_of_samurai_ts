import React from 'react';
import s from './Messages.module.css'
import {messageItemType} from "../../../redux/store";

function Messages(props:messageItemType) {
    return (
        <div className={s.item}>
            {props.title}
        </div>
    );
}

export default Messages;