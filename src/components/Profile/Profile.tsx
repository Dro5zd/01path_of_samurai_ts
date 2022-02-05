import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postMessageType} from "../../redux/state";
import  s from "./Profile.module.css"

type ProfilePropsType = {
    postMessage: postMessageType[]
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.pContent}>
            <ProfileInfo/>
            <MyPosts postMessage={props.postMessage}/>
        </div>
    );
}

export default Profile