import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {


    return (
        <div className={s.posts}>
            My Posts
            <div>
                <input/>
                <button> Add post</button>
            </div>
            <Post message='Hi. How r u?' count={2}/>
            <Post message="I'm fine! Thx." count={15}/>
        </div>
    );
}

export default MyPosts