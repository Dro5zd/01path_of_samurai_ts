import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {RootStateType} from '../../redux/store-redux';
import {StoreType} from '../../redux/store';

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile