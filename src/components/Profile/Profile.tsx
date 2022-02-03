import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type postMessagePropsType = {
    message:string
    likeCount:number
}

type postMessageItem = {
    postMessage: Array<postMessagePropsType>
}

const Profile = (props:postMessageItem) =>{

    return (
        <div>
            <ProfileInfo/>
            <MyPosts text={props.postMessage}/>
        </div>
    );
}

export default Profile