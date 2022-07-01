import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContiner';
import {Routes} from './components/Routes/Routes';


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Routes/>
            <Sidebar/>
        </div>
    )
}
export default App





