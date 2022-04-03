import {addPostAC, updateNewPostAC} from './profile-reducer';
import {v1} from 'uuid';


export type UsersReducerType = {
    users: UsersType[]
}

export type LocationType = {
    country: string
    city: string
}

export type UsersType = {
    id: number
    avatar: string
    fullName: string
    status : string
    location: LocationType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>


const initialState: UsersReducerType = {
    users: [
        {
            id: 1,
            fullName: 'Homer Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png',
            status: 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield'}
        },
        {
            id: 2,
            fullName: 'Lisa Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-1.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 3,
            fullName: 'Bart Simpson',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal9zpW8P7puFa4bi8cFTU26yK6KgXx1rTA_6BRyY05-j74hs4K1CUc7v70w4RX6tHKns&usqp=CAU',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 4,
            fullName: 'Marge Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-7.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 5,
            fullName: 'Krusty the Clown',
            avatar: 'https://whatsondisneyplus.com/wp-content/uploads/2021/09/krusty.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 6,
            fullName: 'Maggie Simpson',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-6.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 7,
            fullName: 'Ralph Wiggum',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-4.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 8,
            fullName: 'Dr. Hibbert',
            avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-3.png',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 9,
            fullName: 'Ned Flanders',
            avatar: 'https://static.wikia.nocookie.net/simpsons/images/2/2e/Season_23_Icon.jpg',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
        {
            id: 10,
            fullName: 'Abraham Simpson II',
            avatar: 'https://static.wikia.nocookie.net/simpsons/images/5/5f/Season_24_Icon.jpg',
            status : 'I like Springfield!',
            location: { country: 'USA', city: 'Springfield', }
        },
    ]
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {

            return {
                ...state
            }
        }

        case 'UPDATE-NEW-MESSAGE': {
            return {
                ...state
            }
        }

    }
    return state
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateNewMessageAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessage
    } as const
}

export default usersReducer