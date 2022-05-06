import {usersAPI} from '../components/api/api';

export type UsersReducerType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type ActionsTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


const initialState: UsersReducerType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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

        case 'TOGGLE-IS-FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.usersId]
                    : state.followingInProgress.filter(id => id != action.usersId)
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

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW' as const,
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
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

export const toggleFollowingProgress = (isFetching: boolean, usersId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING_PROGRESS' as const,
        isFetching,
        usersId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number)=> {
     return (dispatch: any) => {

         dispatch(toggleIsFetching(true))

         usersAPI.getUsers(currentPage, pageSize)
             .then(data => {
                 dispatch(toggleIsFetching(false))
                 dispatch(setUsers(data.items))
                 dispatch(setTotalUsersCount(data.totalCount = 300))
             })
     }
}

export default usersReducer