import React from 'react';
import s from './MyPosts.module.css'
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Post from './Post/Post';
import {MyPostsProps} from './MyPostsContainer';


const MyPosts = (props: MyPostsProps) => {
    let postMessageItem = props.postMessage.map(m => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>)
    return (
        <div className={s.posts}>
            <div>
                <TextField id="outlined-basic"
                           label="Outlined"
                           variant="outlined"
                           value={props.newPostText}
                           onChange={props.onPostChange}/>

                <Button onClick={props.onClickAddPostButtonHandler} variant="contained" endIcon={<SendIcon/>}>
                    Send
                </Button>

            </div>
            {postMessageItem}
        </div>
    );
}

export default MyPosts