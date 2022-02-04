export type postMessageType = {
    id: number
    message: string
    likeCount: number
}

 export type profilePageType = {
    postMessage: Array<postMessageType>
}

export type dialogsType = {
    id: number
    name: string

}

export type messagesType = {
    id: number
    title: string
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
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
        dialogs: [
            {id: 1, name: "Homer"},
            {id: 2, name: "Lisa"},
            {id: 3, name: "Bart"},
            {id: 4, name: "Marge"},
            {id: 5, name: "Krusty"},
        ],

        messages: [
            {id: 1, title: 'Hello'},
            {id: 2, title: 'Hi'},
            {id: 3, title: 'How r u?'},
            {id: 4, title: 'I\'m fine!!!'},
        ]


    }


}



