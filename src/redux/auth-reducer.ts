import {authAPI, DataRequestType} from '../components/api/api';
import {Dispatch} from '@reduxjs/toolkit';
import {TypedDispatch} from './store-redux';


export type authReducerType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

export type ActionsTypes =
    ReturnType<typeof setUserData>


const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action: ActionsTypes): authReducerType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA' as const,
        payload: {id, email, login, isAuth}
    } as const
}


export const getAuth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}
export const login = (data: DataRequestType) => {
    return (dispatch: TypedDispatch) => {
        authAPI.login(data)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(getAuth())
                }
            })
    }
}

export const logOut = () => {
    return (dispatch: Dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer