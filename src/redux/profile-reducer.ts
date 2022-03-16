import {ActionsTypes, postMessageType} from './state';

// type ProfileReducerType = {
//     state: any
//     action: ActionsTypes
// }

let initialState = {
    profilePage: {
        postMessage: [
            {id: 1, message: 'Hi. How r u?', likeCount: 12},
            {id: 2, message: 'Why u so serious?', likeCount: 45}
        ],
        newPostText: ''
    }
}

const profileReducer = (state: any = initialState, action: ActionsTypes) => {
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
