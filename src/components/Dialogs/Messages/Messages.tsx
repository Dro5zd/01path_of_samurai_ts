import React from 'react';
import s from './Messages.module.css'
import {MessageItemType} from '../../../redux/dialogs-reducer';


function Messages(props:MessageItemType) {
    return (
        <div className={s.item}>
            {props.title}
        </div>
    );
}

export default Messages;