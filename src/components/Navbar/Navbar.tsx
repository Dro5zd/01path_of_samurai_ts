import React from "react";
import s from './Navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import NavbarRow from "./NavbarRow";


const Navbar = () => {
    return <nav className={s.nav}>
        <NavbarRow title='Profile' url='/profile' icon={<AccountCircleIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
        <NavbarRow title='Messages' url='/dialogs' icon={<EmailOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
        <NavbarRow title='News' url='/news' icon={<RssFeedOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
        <NavbarRow title='Music' url='/music' icon={<HeadphonesOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
        <NavbarRow title='Settings' url='/settings' icon={<SettingsOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
        <NavbarRow title='Users' url='/users' icon={<SupervisedUserCircleOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
    </nav>
}


export default Navbar;
