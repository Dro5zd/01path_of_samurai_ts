export type UsersReducerType = {
    users: UsersType[]
}

export type LocationType = {
    country: string
    city: string
}

export type UsersType = {
    id: number
    photos: {small: string| null, large: string|null}
    name: string
    status: string
    location: LocationType
    followed: boolean
}

export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


const initialState: UsersReducerType = {
    users: []
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

    export const followAC = (userId: number) => {
        return {
            type: 'FOLLOW',
            userId
        } as const
    }

    export const unfollowAC = (userId: number) => {
        return {
            type: 'UNFOLLOW',
            userId
        } as const
    }

    export const setUsersAC = (users: UsersType[]) => {
        return {
            type: 'SET-USERS',
            users
        } as const
    }

    export default usersReducer