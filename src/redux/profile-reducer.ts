import {ActionsTypes} from './dialogs-reducer';


export type ProfileReducerType = {
    postMessage: Array<PostMessageType>
    newPostText: string
}

export type PostMessageType = {
    id: number
    message: string
    likeCount: number
}

let initialState: ProfileReducerType = {
    postMessage: [
        {id: 1, message: 'Hi. How r u?', likeCount: 12},
        {id: 2, message: 'Why u so serious?', likeCount: 45}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostMessageType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state}
            stateCopy.postMessage = [...state.postMessage]
            stateCopy.postMessage.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy
        }

        case 'UPDATE-NEW-POST': {
            let stateCopy = {...state}
            stateCopy.postMessage = [...state.postMessage]
            stateCopy.newPostText = action.newText
            return stateCopy
        }
    }
    return state
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newText: newText
    } as const
}

export default profileReducer
