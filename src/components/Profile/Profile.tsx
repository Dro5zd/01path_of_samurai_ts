import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props: any) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo profile={props.props}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile