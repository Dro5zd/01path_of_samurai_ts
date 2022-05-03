export type authReducerType = {
    currentPage: number
    isFetching: boolean
}

export type ActionsTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>

const initialState: authReducerType = {
    currentPage: 1,
    isFetching: false
}

const authReducer = (state = initialState, action: ActionsTypes): authReducerType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,

            }
        default:
            return state;
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW' as const,
        userId
    } as const
}


export default authReducer