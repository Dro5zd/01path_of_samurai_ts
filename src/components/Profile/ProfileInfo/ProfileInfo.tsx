import s from "../ProfileInfo/ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.picture}><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                alt={'Mountain'}/></div>
            <div className={s.avatar}>
                <img src='https://i.imgur.com/68RKwAl.png' alt={'ava'}/>
                <h2 className={s.profileName}>Homer Simpson</h2>
            </div>

        </div>
    )
}

