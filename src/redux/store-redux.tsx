import {combineReducers, createStore} from '@reduxjs/toolkit';
import profileReducer, {ProfileReducerType} from './profile-reducer';
import dialogsReducer, {DialogsReducerType} from './dialogs-reducer';

export type StoreReduxType = {
    profilePage: ProfileReducerType
    dialogsPage: DialogsReducerType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store:any = createStore(reducers)


export default store