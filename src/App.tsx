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
import {messagesType, dialogsType, state, postMessageType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    dialog: dialogsType[],
    message: messagesType[],
    postMessage: postMessageType[]
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile postMessage={state.profilePage.postMessage}/>}/>
                        <Route path="/dialogs/*" element= {<Dialogs dialogItem={state.dialogsPage.dialogs} messageItem={state.dialogsPage.messages}/>}/>
                        <Route path="/news/*" element= {<News/>}/>
                        <Route path="/music/*" element= {<Music/>}/>
                        <Route path="/settings/*" element= {<Settings/>}/>
                    </Routes>
                </div>
                <Sidebar/>
            </div>
        </BrowserRouter>)
}
export default App
