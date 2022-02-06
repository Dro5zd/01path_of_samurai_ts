import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Messages from './Messages/Messages'
import {dialogItemType, messageItemType} from "../../redux/state";

type dialogsPagePropsType = {
    dialogItem: dialogItemType[],
    messageItem: messageItemType[]
}


const Dialogs = (props: dialogsPagePropsType) => {
    // let filteredDialogs = props.dialogItem.slice(0, 2);
    let dialogsElement = props.dialogItem.map(d => <DialogItem  key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesItem = props.messageItem.map(d => <Messages key={d.id} title={d.title}
    id={d.id}/>)
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