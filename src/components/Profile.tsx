import React from "react";

const Profile = () =>{


    return (
        <div className='content'>
            <div><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                alt={'Mountain'}/></div>
            <div>
                Ava + Descrition
                <img src='https://i.imgur.com/68RKwAl.png' alt={'ava'}/>

            </div>
            <div>
                My Posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>

        </div>
    );
}

export default Profile