import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store'

let rerender = (state) =>{{
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}}

rerender(store.getState())
store.subscribe(()=>{
    let state = store.getState()
    rerender(state)
})
//let state = store.getState()
// ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
serviceWorker.unregister();

