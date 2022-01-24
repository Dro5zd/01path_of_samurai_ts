import React from 'react';
import './App.css';

const App = () => {
    // @ts-ignore
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://i.pinimg.com/236x/be/62/4f/be624f8809034d83940b6d2346afad92--monogram-logo-logo-google.jpg' alt={"#"}/>
            </header>
            <nav className='navbar'>
                <div><a>Profile</a></div>
                <div>Messages</div>
                <div>News</div>
            </nav>
            <div className='content'>
                Main content
            </div>
        </div>
    );
}

export default App;
