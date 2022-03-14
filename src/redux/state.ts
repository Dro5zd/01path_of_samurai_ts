
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
}


export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

let store = {

}

export let state: RootStateType = {

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
        ]
    }

}

export const addPost = () => {
    const newPost: postMessageType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postMessage.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

let rerenderEntireTree = () =>{
    console.log('GoGoGo')
}

export const subscribe = (observer: ()=> void) => {
    rerenderEntireTree = observer
}



