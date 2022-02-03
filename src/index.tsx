import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {name: "Homer", id: 1},
    {name: "Lisa", id: 2},
    {name: "Bart", id: 3},
    {name: "Marge", id: 4},
    {name: "Krusty", id: 5},
]

let messages = [
    {title: 'Hello'},
    {title: 'Hi'},
    {title: 'How r u?'},
    {title: 'I\'m fine!!!'},
]

let postMessage = [
    {message: 'Hi. How r u?', likeCount: 12},
    {message: 'Why u so serious?', likeCount: 45}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogs} message={messages} postMessage={postMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
