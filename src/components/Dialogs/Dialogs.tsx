import React, {ChangeEvent} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Messages from './Messages/Messages'
import {ActionsTypes, addPostAC, dialogItemType, messageItemType, updateNewPostAC} from '../../redux/state';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type dialogsPagePropsType = {
    dialogItem: dialogItemType[],
    messageItem: messageItemType[],
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: dialogsPagePropsType) => {
    let family = props.dialogItem.filter(i => (i.id <= 4))

    let dialogsElement = family.map(d => <DialogItem  key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesItem = props.messageItem.map(d => <Messages key={d.id} title={d.title}
    id={d.id}/>)

    const onClickAddPostButtonHandler = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostAC(e.currentTarget.value))
    }
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
                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                           value={""}
                           onChange={onPostChange}/>

                <Button onClick={onClickAddPostButtonHandler} variant="contained" endIcon={<SendIcon/>}>
                    Send
                </Button>

            </div>
        </div>
    );
}

export default Dialogs