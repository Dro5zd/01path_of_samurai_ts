import {ActionsTypes, postMessageType} from './store';

export type ProfileReducerType = {
    postMessage: Array<postMessageType>
    newPostText: string
}

let initialState = {
        postMessage: [
            {id: 1, message: 'Hi. How r u?', likeCount: 12},
            {id: 2, message: 'Why u so serious?', likeCount: 45}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsTypes):ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: postMessageType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            state.postMessage.push(newPost);
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST':
            state.newPostText = action.newText
            break;
    }
    return state
}

export default profileReducer
