import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export type postMessageType = {
    id: number
    message: string
    likeCount: number
}

export type profilePageType = {
    postMessage: Array<postMessageType>
    newPostText: string
}

export type dialogItemType = {
    id: number
    name: string
    avatar: string
}

export type messageItemType = {
    id: number
    title: string
}

export type dialogsPageType = {
    dialogItem: Array<dialogItemType>
    messageItem: Array<messageItemType>
    newMessageText: string
}

export type RootStateType1 = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type StoreType = {
    _state: RootStateType1
    _rerenderEntireTree: (state: RootStateType1) => void

    subscribe: (observer: (state: RootStateType1) => void) => void
    getState: () => RootStateType1

    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>


export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
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

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newText: newText
    } as const
}

export let store: StoreType = {
    _state: {

        profilePage: {
            postMessage: [
                {id: 1, message: 'Hi. How r u?', likeCount: 12},
                {id: 2, message: 'Why u so serious?', likeCount: 45}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogItem: [
                {
                    id: 1,
                    name: 'Homer Simpson',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png'
                },
                {
                    id: 2,
                    name: 'Lisa Simpson',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-1.png'
                },
                {
                    id: 3,
                    name: 'Bart Simpson',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal9zpW8P7puFa4bi8cFTU26yK6KgXx1rTA_6BRyY05-j74hs4K1CUc7v70w4RX6tHKns&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Marge Simpson',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-7.png'
                },
                {
                    id: 5,
                    name: 'Krusty the Clown',
                    avatar: 'https://whatsondisneyplus.com/wp-content/uploads/2021/09/krusty.png'
                },
                {
                    id: 6,
                    name: 'Maggie Simpson',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-6.png'
                },
                {
                    id: 7,
                    name: 'Ralph Wiggum',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-4.png'
                },
                {
                    id: 8,
                    name: 'Dr. Hibbert',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-3.png'
                },
                {
                    id: 9,
                    name: 'Ned Flanders',
                    avatar: 'https://static.wikia.nocookie.net/simpsons/images/2/2e/Season_23_Icon.jpg'
                },
                {
                    id: 10,
                    name: 'Abraham Simpson II',
                    avatar: 'https://static.wikia.nocookie.net/simpsons/images/5/5f/Season_24_Icon.jpg'
                },
            ],

            messageItem: [
                {id: 1, title: 'Hello'},
                {id: 2, title: 'Hi'},
                {id: 3, title: 'How r u?'},
                {id: 4, title: 'I\'m fine!!!'},
            ],
            newMessageText: ''
        }

    },
    _rerenderEntireTree() {
        console.log('GoGoGo')
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    }
}



