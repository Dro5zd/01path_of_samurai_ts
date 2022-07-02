import {ChangeEvent} from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageAC, DialogsReducerType} from '../../redux/dialogs-reducer';
import {RootStateType} from '../../redux/store-redux';
import {Dispatch} from '@reduxjs/toolkit';


type mapStateToPropsPropsType = {
    messageItem: DialogsReducerType
    isAuth: boolean
}

type mapDispatchToPropsPropsType = {
    onClickAddPostButtonHandler: (values: string) => void
}

export type DialogsPropsType = mapStateToPropsPropsType & mapDispatchToPropsPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsPropsType => {
    return {
        messageItem: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPropsType => {
    return {
        onClickAddPostButtonHandler: (values: string) => {
            dispatch(addMessageAC(values))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer