import React from 'react';
import s from './Messages.module.css'

type MessagesPropsType = {
    title:string
}

function Messages(props:MessagesPropsType) {
    return (
        <div className={s.item}>
            {props.title}
        </div>
    );
}

export default Messages;