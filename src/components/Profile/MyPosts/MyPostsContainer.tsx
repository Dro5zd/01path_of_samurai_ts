import React, {ChangeEvent} from 'react';

import {ActionsTypes, addPostAC, postMessageType, updateNewPostAC} from '../../../redux/store';
import MyPosts from './MyPosts';


type MyPostsContainerProps = {
    postMessage: postMessageType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const MyPostsContainer = (props: MyPostsContainerProps) => {

    const onClickAddPostButtonHandler = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostAC(e.currentTarget.value))
    }

    return (
        <MyPosts postMessage={props.postMessage} onClickAddPostButtonHandler={onClickAddPostButtonHandler} onPostChange={onPostChange} newPostText={props.newPostText}/>
    );
}

export default MyPostsContainer