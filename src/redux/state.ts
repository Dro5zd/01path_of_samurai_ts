export type postMessageType = {
    id: number
    message: string
    likeCount: number
}

export type profilePageType = {
    postMessage: Array<postMessageType>
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


export let state: RootStateType = {

    profilePage: {
        postMessage: [
            {id: 1, message: 'Hi. How r u?', likeCount: 12},
            {id: 2, message: 'Why u so serious?', likeCount: 45}
        ]
    },

    dialogsPage: {
        dialogItem: [
            {id: 1, name: "Homer Simpson", avatar: 'https://w7.pngwing.com/pngs/825/720/png-transparent-grampa-simpson-homer-simpson-bart-simpson-marge-simpson-herbert-powell-bart-simpson-vertebrate-fictional-character-cartoon-thumbnail.png'},
            // {id: 2, name: "Lisa Simpson", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPJqgtlKJCSQYwKPyn_duMl-sRzoJdt9d2ec7tqHkXLx_5DqobZk2RCpGBclJEbNMov8&usqp=CAU'},
            // {id: 3, name: "Bart Simpson", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal9zpW8P7puFa4bi8cFTU26yK6KgXx1rTA_6BRyY05-j74hs4K1CUc7v70w4RX6tHKns&usqp=CAU"},
            // {id: 4, name: "Marge Simpson", avatar: "https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-7.png"},
            // {id: 5, name: "Krusty", avatar: "https://whatsondisneyplus.com/wp-content/uploads/2021/09/krusty.png"},
        ],

        messageItem: [
            {id: 1, title: 'Hello'},
            {id: 2, title: 'Hi'},
            {id: 3, title: 'How r u?'},
            {id: 4, title: 'I\'m fine!!!'},
        ]
    }

}



