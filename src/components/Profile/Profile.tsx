import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {state} from "../../redux/state";

// type postMessagePropsType = {
//     message:string
//     likeCount:number
// }
//
// type postMessageItem = {
//     postMessage: Array<postMessagePropsType>
// }

const Profile = (props: any) =>{

    return (
        <div>
            <ProfileInfo/>
            <MyPosts text={state.profilePage.postMessage}/>
        </div>
    );
}

export default Profile