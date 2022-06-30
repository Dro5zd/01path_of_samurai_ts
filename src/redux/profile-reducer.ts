import {
    PhotosType
} from './users-reducer';
import {profileAPI, usersAPI} from '../components/api/api';
import {Dispatch} from '@reduxjs/toolkit';

export type ProfileReducerType = {
    postMessage: Array<PostMessageType>
    newPostText: string
    profile: null | ProfileUsersType
    status: string
}

export type PostMessageType = {
    id: number
    message: string
    likeCount: number
}

export type ContactsType = {
    github: string
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    mainLink: string
}

export type ProfileUsersType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    fullName: string
    status: string
    contacts: ContactsType
    followed: boolean
}

let initialState: ProfileReducerType = {
    postMessage: [
        {id: 1, message: 'Hi. How r u?', likeCount: 12},
        {id: 2, message: 'Why u so serious?', likeCount: 45}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

const profileReducer = (state = initialState, action: ActionsTypes): ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostMessageType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postMessage: [...state.postMessage, newPost]
            }
        }

        case 'UPDATE-NEW-POST': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-USER-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }

}

export const addPostAC = () => {
    return {
        type: 'ADD-POST' as const
    } as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST' as const,
        newText
    } as const
}

export const setUserProfile = (profile: ProfileUsersType) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS' as const,
        status
    } as const
}

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {

                    dispatch(setUserStatus(data))

            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setUserStatus(status))
                }

            })
    }
}

export default profileReducer
