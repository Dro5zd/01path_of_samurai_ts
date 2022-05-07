import {usersAPI} from '../components/api/api';
import {Dispatch} from '@reduxjs/toolkit';

export type authReducerType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export type ActionsTypes =
    ReturnType<typeof setUserData>


const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: ActionsTypes): authReducerType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA' as const,
        data: {id, email, login}
    } as const
}

export const getAuth = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}

export default authReducer