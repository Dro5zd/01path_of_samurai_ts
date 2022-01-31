import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            <AccountCircleIcon/>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            <EmailIcon/>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            <NewspaperIcon/>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            <MusicNoteIcon/>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            <SettingsIcon/>
        </div>
    </nav>
}



export default Navbar;
