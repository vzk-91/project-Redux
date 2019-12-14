import React from 'react';
import store from '../store/store.js';
const state = store.getState()


const context = React.createContext(state)

export default context;