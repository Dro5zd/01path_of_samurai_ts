export type ProfileReducerType = {
    postMessage: Array<PostMessageType>
    newPostText: string
    profile: null
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
    newPostText: '',
    profile: null
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>

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

export const setUserProfile = (profile: null) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        profile
    } as const
}

export default profileReducer
