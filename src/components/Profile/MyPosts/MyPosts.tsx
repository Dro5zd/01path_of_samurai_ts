import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postMessageType} from "../../../redux/state";


type MyPostsProps = {
    postMessage: postMessageType[]
}

const MyPosts = (props:MyPostsProps) => {

    let postMessageItem = props.postMessage.map((m => <Post message={m.message} likeCount={m.likeCount}/>))

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <input/>
                <button> Add post</button>
            </div>
            {postMessageItem}
        </div>
    );
}

export default MyPosts