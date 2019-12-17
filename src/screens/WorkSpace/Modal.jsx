import React, { useContext } from 'react';
import context from '../../context/context'
import { post } from '../../api/index';
import { Button, Modal, Form } from 'react-bootstrap';
import {newPostAction} from '../../actions'

const ModalWindow = ({ show, handleClose, name ,id}) => {
    const { state, dispatch } = useContext(context)
    const { newPost } = state.workspacePage;
    const { description, title, } = newPost;
    newPost.author = name;
    newPost.personId = id;

    const onSubmitForm = () => {
        post(newPost);
    }

    const hendleFormChange = (event) => {
        dispatch(newPostAction(event,newPost))
        
    }
    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Create New Post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group controlId="formBasicTitle">
                    <Form.Control name="title" type="email" placeholder="Title" onChange={hendleFormChange} value={title} />
                </Form.Group>
                <Form.Group controlId="formBasic.ControlTextarea">
                    <Form.Control name="description" as="textarea" rows="3" placeholder="Description" onChange={hendleFormChange} value={description} />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
        </Button>

                <Button variant="primary" onClick={() => { handleClose(); onSubmitForm() }}>
                    Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;