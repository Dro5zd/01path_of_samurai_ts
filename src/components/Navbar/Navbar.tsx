import React from "react";
import s from './Navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import NavbarRow from "./NavbarRow";

const Navbar = () => {
    return <nav className={s.nav}>
        <NavbarRow title='Profile' url='/profile' icon={<AccountCircleIcon className={s.navbar_logo}/>}/>
        <NavbarRow title='Messages' url='/dialogs' icon={<EmailIcon className={s.navbar_logo}/>}/>
        <NavbarRow title={'News'} url={'/news'} icon={<NewspaperIcon className={s.navbar_logo}/>}/>
        <NavbarRow title={'Music'} url={'/music'} icon={<MusicNoteIcon className={s.navbar_logo}/>}/>
        <NavbarRow title={'Settings'} url={'/settings'} icon={<SettingsIcon className={s.navbar_logo}/>}/>
    </nav>
}



export default Navbar;
