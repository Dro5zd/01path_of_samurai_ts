import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postMessageType, state} from '../../../redux/state';
import {rerenderEntireTree} from '../../../index';


type MyPostsProps = {
    postMessage: postMessageType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newPost: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsProps) => {
    let postMessageItem = props.postMessage.map((m => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>))

    const onClickAddPostButtonHandler = () => {
        props.addPost(props.newPostText)
        rerenderEntireTree(state)
    }

    const onEnterAddPostButtonHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            onClickAddPostButtonHandler()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea
                    rows={1}
                    style={{resize: 'none'}}
                    value={props.newPostText}
                    onKeyPress={onEnterAddPostButtonHandler}
                    onChange={onPostChange}/>
                <button onClick={onClickAddPostButtonHandler}> Add post</button>
            </div>
            {postMessageItem}
        </div>
    );
}

export default MyPosts