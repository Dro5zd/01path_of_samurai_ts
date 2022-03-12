import React, { KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postMessageType, state} from '../../../redux/state';
import {rerenderEntireTree} from '../../../index';


type MyPostsProps = {
    postMessage: postMessageType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newPost: string) => void
}

const MyPosts = (props: MyPostsProps) => {
    let postMessageItem = props.postMessage.map((m => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>))

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostButtonHandler = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
        }
        rerenderEntireTree(state)
    }

    const onEnterAddPostButtonHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            onClickAddPostButtonHandler()
        }
    }

    const onPostChange = () => {
        if (postMessageRef.current) {
            props.updateNewPostText(postMessageRef.current.value)
        }
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea
                    rows={1}
                    style={{resize: 'none'}}
                    ref={postMessageRef}
                    onKeyPress={onEnterAddPostButtonHandler}
                    onChange={onPostChange}/>
                <button onClick={onClickAddPostButtonHandler}> Add post</button>
            </div>
            {postMessageItem}
        </div>
    );
}

export default MyPosts