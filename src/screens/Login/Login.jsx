import React, { useContext } from 'react';
import context from '../../context/context'
import { Button, Form } from 'react-bootstrap';
import { login,getPost } from '../../api/index';
import Storage from '../../services/storage';
import {loginAction,idAction,postsFetchAction} from '../../actions'


import './login.css'


const Login = (props) => {
  const {state,dispatch} = useContext(context)
    const {loginData} = state.loginPage;

  const onSubmitForm = () => {
    login(loginData)
      .then(response => {
        if (response.status !== 200) {
          return alert("Unable to log in")
        }
       return response.json()
      })
      .then(data => {
        const info = ({ token: data.id, id: data.userId })
        Storage.set('user', info)
          dispatch(idAction(data))
          getPost().then(function (data) {
            dispatch(postsFetchAction(data))
        });
          props.history.push('/workspace')
        }
        )
        .catch(error => {
        console.log(error)
      })
  }
console.log(state)
  const hendleFormChange = (event) => {
    dispatch(loginAction(event, loginData))
  }

  return (
    <div className="logForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={hendleFormChange} value={state.email} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={hendleFormChange} value={state.password} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" onClick={onSubmitForm}>Log In</Button>
    </div>
  )
}

export default React.memo(Login);;


