import React from "react";
import s from './Post.module.css'

type PostPropsType = {message:string, likeCount: number}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img
                src='https://w7.pngwing.com/pngs/825/720/png-transparent-grampa-simpson-homer-simpson-bart-simpson-marge-simpson-herbert-powell-bart-simpson-vertebrate-fictional-character-cartoon-thumbnail.png'
                alt={'avaHomer'}/>
            {props.message}
            <div>
                <span> Like</span>
                {props.likeCount}
            </div>
        </div>
    );
}

export default Post