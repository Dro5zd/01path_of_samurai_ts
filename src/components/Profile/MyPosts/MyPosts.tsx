import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsPropsType = {
    message: string,
    likeCount: number
}

type MyPostsProps = {
    text: Array<MyPostsPropsType>
}

const MyPosts = (props:MyPostsProps) => {

    let postMessageItem = props.text.map((m => <Post message={m.message} likeCount={m.likeCount}/>))

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