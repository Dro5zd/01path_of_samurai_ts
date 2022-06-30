import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUsersType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: null | ProfileUsersType
    status: string
    updateUserStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile