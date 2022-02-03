import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Messages from './Messages/Messages'

let dialogs = [
    {name: "Homer", id: 1},
    {name: "Lisa", id: 2},
    {name: "Bart", id: 3},
    {name: "Marge", id: 4},
    {name: "Krusty", id: 5},
]

let messages = [
    {title: 'Hello'},
    {title: 'Hi'},
    {title: 'How r u?'},
    {title: 'I\'m fine!!!'},
]


const Dialogs = () => {
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesItem = messages.map(d => <Messages title={d.title}/>)
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