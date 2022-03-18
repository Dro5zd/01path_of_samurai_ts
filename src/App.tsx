import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {ActionsTypes, RootStateType1, StoreType} from './redux/store';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {RootStateType} from './redux/store-redux';

type AppPropsType = {
    state: RootStateType1
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer store={props.store}/>}/>
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
