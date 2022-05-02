export type UsersReducerType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


const initialState: UsersReducerType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false
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

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

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

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW' as const,
        userId
    } as const
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS' as const,
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE' as const,
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT' as const,
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING' as const,
        isFetching
    } as const
}

export default usersReducer