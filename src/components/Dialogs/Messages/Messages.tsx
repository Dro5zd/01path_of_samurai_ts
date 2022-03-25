import React from 'react';
import s from './Messages.module.css'
import {MessageItemType} from '../../../redux/dialogs-reducer';


function Messages(props:MessageItemType) {
    return (
        <>
            <div className={s.item}>
                <img src={props.avatar} alt="avatar"/>
                <div className={s.messages_container}>
                    {/*<p className={s.name}>{props.name}</p>*/}
                    <div className={s.msg}>{props.message}</div>
                </div>
            </div>
            <span className={s.time}>{props.time}</span>
        </>

    );
}

export default Messages;