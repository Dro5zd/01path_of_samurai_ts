import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} addPost={store._state.addPost}  updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store._state)
store.subscribe (rerenderEntireTree)


