import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, postMessageType} from '../../redux/store';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    postMessage: postMessageType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo/>
            <MyPostsContainer postMessage={props.postMessage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile