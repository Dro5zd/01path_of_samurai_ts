import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


let postMessage = [
    {message: 'Hi. How r u?', likeCount: 12},
    {message: 'Why u so serious?', likeCount: 45}

]

const MyPosts = () => {

    let postMessageItem = postMessage.map((m => <Post message={m.message} likeCount={m.likeCount}/>))

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