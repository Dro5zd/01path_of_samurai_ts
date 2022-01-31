import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Messages from "../Messages/Messages";

const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
            <div>
                <DialogItem name="Homer" id={1}/>
                <DialogItem name="Lisa" id={2}/>
                <DialogItem name="Bart" id={3}/>
                <DialogItem name="Marge" id={4}/>
                <DialogItem name="Krusty" id={5}/>
            </div>
            <div>
                <Messages title={'Hello'}/>
                <Messages title={'Hi'}/>
                <Messages title={'How r u?'}/>
                <Messages title={`I'm fine!!!`}/>
            </div>
        </div>

    );
}

export default Dialogs