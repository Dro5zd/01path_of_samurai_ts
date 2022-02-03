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


type AppDialogPropsType = {
    name:string
    id:number
}

type AppMessagePropsType = {
    title:string
}

type AppPostMessagePropsType = {
    message:string
    likeCount:number
}

type AppProps ={
    dialog: Array<AppDialogPropsType>
    message: Array<AppMessagePropsType>
    postMessage: Array<AppPostMessagePropsType>
}

const App = (props:AppProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile postMessage={props.postMessage}/>}/>
                        <Route path="/dialogs/*" element= {<Dialogs dialogItem={props.dialog} messageItem={props.message}/>}/>
                        <Route path="/news/*" element= {<News/>}/>
                        <Route path="/music/*" element= {<Music/>}/>
                        <Route path="/settings/*" element= {<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}
export default App
