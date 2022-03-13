import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/state';

export let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()


