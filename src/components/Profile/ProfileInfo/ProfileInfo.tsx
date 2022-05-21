import s from "../ProfileInfo/ProfileInfo.module.css";
import React from "react";
import {Preloader} from '../../common/Preloader';
import {ProfileUsersType} from '../../../redux/profile-reducer';
import noPhoto from '../../../assets/img/noPhoto.png';
import {ProfileStatus} from './ProfileStatus';


type ProfileInfoPropsType = {
    profile: null | ProfileUsersType
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.picture}><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                alt={'Mountain'}/></div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small || noPhoto} alt={'ava'}/>

                <h2 className={s.profileName}>{props.profile.fullName}</h2>

                <ProfileStatus status={'Hi! How are you?'}/>
            </div>

        </div>
    )
}

