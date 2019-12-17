import React,{useContext,useEffect} from 'react';
import './nav.css';
import { Nav } from 'react-bootstrap';
import context from '../../context/context';
import Storage from '../../services/storage'



const Navigate = () => {
    const {state} = useContext(context)
  

    return (
        <Nav fill variant="tabs"  >
            <Nav.Item>
                <Nav.Link href="#/home" >Home</Nav.Link>
            </Nav.Item>
            {!state.userID.id ? <Nav.Item>
                <Nav.Link href="#/login"> Log In</Nav.Link>
            </Nav.Item> : 
             <Nav.Item>
                <Nav.Link href="#/logout"> Log Out</Nav.Link>
            </Nav.Item> }
            <Nav.Item>
                <Nav.Link href="#/registration" >Registration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {state.userID.id &&<Nav.Link href="#/workspace" >WorkSpace</Nav.Link>}
            </Nav.Item>
        </Nav>

    )
}

export default React.memo(Navigate);