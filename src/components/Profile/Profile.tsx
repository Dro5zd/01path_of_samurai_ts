import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postMessageType} from '../../redux/state';
import s from './Profile.module.css'

type ProfilePropsType = {
    postMessage: postMessageType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newPost: string) => void
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo/>
            <MyPosts postMessage={props.postMessage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile