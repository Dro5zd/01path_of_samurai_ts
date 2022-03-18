import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, postMessageType} from '../../redux/store';
import s from './Profile.module.css'

type ProfilePropsType = {
    postMessage: postMessageType[]
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo/>
            <MyPosts postMessage={props.postMessage}
                     newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile