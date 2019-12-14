import React, {useContext, useReducer,useEffect} from 'react';
import Home from './screens/home/Home';
import Login from './screens/Login/Login';
import Navigate from './screens/nav/nav';
import Registration from './screens/Registration/Registration';
import WorkSpace from './screens/WorkSpace/WorkSpace';
import Footer from './screens/Footer/Footer';
import {BrowserRouter, Route,Router } from 'react-router-dom';
import context from './context/context';
import Storage from './services/storage'
import './App.css';
import {idAction} from './actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from './screens/Login/logout';




function App(props) {
 const {dispatch,state} = props
 const {id} = state.userID
  useEffect(() => {
            const user = Storage.get('user');
            if(user){
            dispatch(idAction(user))
            }
        }
  , [])
  
  return (
  <BrowserRouter>
    <context.Provider value={{state,dispatch}}>
    <div className="App">
      <Navigate  id={id} />
      <Route  path='/home'  render={()=> <Home/>}/>;
      <Route  path='/login'  render={(routeprops)=> <Login  {...routeprops}/>}/>
      <Route  path='/logout'  render={(routeprops)=> <LogOut  {...routeprops}/>}/>
      <Route  path='/registration'  render={(routeprops)=> <Registration {...routeprops}/>}/>
      <Route  path='/workspace'  render={()=> <WorkSpace/>}/>
      <Route  path='/home'  render={()=> <Footer/>}/>
    </div>
    </context.Provider>
  </BrowserRouter>
  );
}

export default App;

