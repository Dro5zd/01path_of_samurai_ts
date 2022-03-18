import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store, {StoreType} from './redux/store-redux';

export let rerenderEntireTree = (store: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


