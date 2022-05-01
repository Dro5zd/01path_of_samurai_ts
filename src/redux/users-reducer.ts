export type UsersReducerType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type ContactsType = {
    github: string
    facebook: string
}

export type UsersType = {
    id: number
    photos: { small: string | null, large: string | null }
    name: string
    status: string
    contacts: ContactsType
    followed: boolean

}

export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>


const initialState: UsersReducerType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 2
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
            return {...state, users: action.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUsersCount: action.totalCount}

        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW' as const,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW' as const,
        userId
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS' as const,
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE' as const,
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT' as const,
        totalCount
    } as const
}

export default usersReducer