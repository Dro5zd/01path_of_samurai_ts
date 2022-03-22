import React, {ChangeEvent} from 'react';
import {addMessageAC, updateNewMessageAC} from '../../redux/store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


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

let mapStateToProps = (state) => {
    return {
        messageItem: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>)=> {
            dispatch(updateNewMessageAC(e.currentTarget.value))
        },
        onClickAddPostButtonHandler: ()=>{
            dispatch(addMessageAC())
        }
    }
}


const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer