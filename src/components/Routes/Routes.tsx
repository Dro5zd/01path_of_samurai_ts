import {Route} from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import Login from '../Login/Login';
import React from 'react';
import s from './Routes.module.css';

export const Routes = () => {
    return (
        <div className={s.appWrapperContent}>
            <Route path="/profile/:userId?"
                   render={() => <ProfileContainer/>}/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>
    );
};