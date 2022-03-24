import {combineReducers, createStore} from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers)


export default store