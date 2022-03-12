import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {RootStateType} from './redux/state';
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string)=>void
    updateNewPostText: (newPost: string) => void
}

const App = (props: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile postMessage={props.state.profilePage.postMessage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogItem={props.state.dialogsPage.dialogItem}
                                                                   messageItem={props.state.dialogsPage.messageItem}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
                <Sidebar contactItem={props.state.dialogsPage.dialogItem}/>
            </div>
    )
}
export default App
