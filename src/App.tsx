import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {profilePageType, dialogsPageType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    dialogsPage: dialogsPageType,
    profilePage: profilePageType,
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile postMessage={props.profilePage.postMessage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogItem={props.dialogsPage.dialogs}
                                                                   messageItem={props.dialogsPage.messages}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
                <Sidebar/>
            </div>
        </BrowserRouter>)
}
export default App
