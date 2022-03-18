import {ActionsTypes, dialogItemType, messageItemType} from './store';

export type DialogsReducerType = {
    dialogItem: Array<dialogItemType>
    messageItem: Array<messageItemType>
    newMessageText: string
}

const initialState: DialogsReducerType = {
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

const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsReducerType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: messageItemType = {
                id: new Date().getTime(),
                title: state.newMessageText
            };
            state.messageItem.push(newMessage)
            state.newMessageText = ''
            break;
        case 'UPDATE-NEW-MESSAGE':
            state.newMessageText = action.newMessage
            break;
    }
    return state
}

export default dialogsReducer