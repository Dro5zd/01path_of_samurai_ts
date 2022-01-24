import React from 'react';
import './App.css';
import logo from './logo-abm.png'
import Header from "./components/Header";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div><img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    alt={'Mountain'}/></div>
                <div>
                    Ava + Descrition
                    <img src='https://i.imgur.com/68RKwAl.png'/>
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
        </div>
    );
}

export default App;
