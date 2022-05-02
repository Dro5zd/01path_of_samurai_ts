import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {UsersType} from '../../redux/users-reducer';

type ProfilePropsType = {
    profile: null | UsersType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile