import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


const Dialogs = (props: DialogsPropsType) => {
    let family = props.messageItem.dialogItem.filter(i => (i.id <= 4))

    let dialogsElement = family.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesItem = props.messageItem.messageItem.map(d => <Messages key={d.id} message={d.message}
                                                                        id={d.id} name={d.name} avatar={d.avatar} time={d.time}/>)

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElement}
                </div>
                <div className={s.item}>
                    {messagesItem}
                </div>
            </div>
            <div>
                <TextField id="outlined-basic"
                           variant="outlined"
                           value={props.newMessageText}
                           onChange={props.onPostChange}/>
                <SendIcon onClick={props.onClickAddPostButtonHandler}/>
            </div>
        </div>
    );
}

export default Dialogs