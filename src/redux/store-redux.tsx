import {AnyAction, applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from 'react-redux';

export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type TypedDispatch = ThunkDispatch<RootStateType, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store