import {ChangeEvent} from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageAC, DialogsReducerType, updateNewMessageAC} from '../../redux/dialogs-reducer';
import {RootStateType} from '../../redux/store-redux';
import {Dispatch} from '@reduxjs/toolkit';


type mapStateToPropsPropsType = {
    messageItem: DialogsReducerType
    newMessageText: string
    isAuth: boolean
}

type mapDispatchToPropsPropsType = {
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickAddPostButtonHandler: () => void
}

export type DialogsPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        messageItem: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPropsType => {
    return {
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageAC(e.currentTarget.value))
        },
        onClickAddPostButtonHandler: () => {
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer