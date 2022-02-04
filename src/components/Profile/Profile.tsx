import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postMessageType, state} from "../../redux/state";

type ProfilePropsType = {
    postMessage: postMessageType[]
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts text={state.profilePage.postMessage}/>
        </div>
    );
}

export default Profile