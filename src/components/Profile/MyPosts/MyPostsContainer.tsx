import React, {ChangeEvent} from 'react';
import {addPostAC, StoreType, updateNewPostAC} from '../../../redux/store';
import MyPosts from './MyPosts';


type MyPostsContainerProps = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerProps) => {
    let state = props.store.getState()

    const onClickAddPostButtonHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewPostAC(e.currentTarget.value))
    }

    return (
        <MyPosts postMessage={state.profilePage.postMessage} onClickAddPostButtonHandler={onClickAddPostButtonHandler} onPostChange={onPostChange} newPostText={state.profilePage.newPostText}/>
    );

}



export default MyPostsContainer