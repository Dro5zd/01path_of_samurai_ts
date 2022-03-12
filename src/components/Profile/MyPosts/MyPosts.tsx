import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postMessageType, state} from '../../../redux/state';
import {rerenderEntireTree} from '../../../index';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


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

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                           value={props.newPostText}
                           onChange={onPostChange}/>

                <Button onClick={onClickAddPostButtonHandler} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>

            </div>
            {postMessageItem}
        </div>
    );
}

export default MyPosts