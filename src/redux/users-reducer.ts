import {v1} from 'uuid';


export type UsersReducerType = {
    users: UsersType[]
}

export type LocationType = {
    country: string
    city: string
}

export type UsersType = {
    id: string
    avatar: string
    fullName: string
    status : string
    location: LocationType
    follow: boolean
}

export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>


const initialState: UsersReducerType = {
    users: [
        {
            id: v1(),
            fullName: 'Homer Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png',
            status: 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield'},
            follow: true
        },
        {
            id: v1(),
            fullName: 'Lisa Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-1.png',
            status : 'Pray for Ukraine!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Bart Simpson',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal9zpW8P7puFa4bi8cFTU26yK6KgXx1rTA_6BRyY05-j74hs4K1CUc7v70w4RX6tHKns&usqp=CAU',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Marge Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-7.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Krusty the Clown',
            avatar: 'https://whatsondisneyplus.com/wp-content/uploads/2021/09/krusty.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Maggie Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-6.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', },
            follow: false
        },
        {
            id: v1(),
            fullName: 'Ralph Wiggum',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-4.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Dr. Hibbert',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-3.png',
            status : 'Russian warship go fuck yourself',
            location: { country: 'USA', city: 'Springfield', },
            follow: false
        },
        {
            id: v1(),
            fullName: 'Ned Flanders',
            avatar: 'https://static.wikia.nocookie.net/simpsons/images/2/2e/Season_23_Icon.jpg',
            status : 'God safe Ukraine!',
            location: { country: 'USA', city: 'Springfield', },
            follow: true
        },
        {
            id: v1(),
            fullName: 'Abraham Simpson II',
            avatar: 'https://static.wikia.nocookie.net/simpsons/images/5/5f/Season_24_Icon.jpg',
            status : 'Stand with Ukraine!',
            location: { country: 'USA', city: 'Springfield', },
            follow: false
        },
    ]
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerType => {
    switch (action.type) {
        case 'FOLLOW': {

            return {
                [...state, users: state.users.map(u=>u)]
            }
        }

        case 'UNFOLLOW': {
            return {
                ...state
            }
        }
    }
    return state
}

export const followAC = (userId) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export default usersReducer