import {combineReducers} from 'redux';
import blogersReducer from './blogersReducer'
import loginPageReducer from './loginPageReducer';
import registrationPageReducer from './registrationPageReducer';
import workspacePageReducer from './workspacePageReducer';
import spinerReducer from './spinerReducer';
import userIDReducer from './userIDReducer';
import postReducer from './postsReducer';


const reducers = combineReducers({
    blogers : blogersReducer,
    posts : postReducer,
    loginPage : loginPageReducer,
    registrationPage : registrationPageReducer,
    workspacePage : workspacePageReducer,
    spinner : spinerReducer,
    userID : userIDReducer,
})

export default reducers;