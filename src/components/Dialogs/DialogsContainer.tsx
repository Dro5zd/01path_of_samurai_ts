import React, {ChangeEvent} from 'react';
import {addMessageAC, updateNewMessageAC} from '../../redux/store';
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    store: any
}


const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    const onClickAddPostButtonHandler = () => {
        props.store.dispatch(addMessageAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageAC(e.currentTarget.value))
    }

    return (
        <Dialogs onPostChange={onPostChange} onClickAddPostButtonHandler={onClickAddPostButtonHandler}
                 messageItem={state} newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer