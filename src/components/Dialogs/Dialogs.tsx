import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Messages from './Messages/Messages'


type AppDialogPropsType = {
    name:string
    id:number
}

type AppMessagePropsType = {
    title:string
}

type AppProps ={
    dialogItem: Array<AppDialogPropsType>
    messageItem: Array<AppMessagePropsType>
}

const Dialogs = (props:AppProps) => {
    let dialogsElement = props.dialogItem.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesItem = props.messageItem.map(d => <Messages title={d.title}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.item}>
                {messagesItem}
            </div>
        </div>
    );
}

export default Dialogs