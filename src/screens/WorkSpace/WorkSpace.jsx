import React, {  useEffect,useContext } from 'react';
import context from '../../context/context'
import './workspace.css'
import Items from './items';
import ModalWindow from './Modal';
import Header from './header'
import { byId,getPost } from '../../api';
import Storage from '../../services/storage'
import {getNameAction,modalShowAction,modalHideAction,postsFetchAction} from '../../actions'


const WorkSpace = () => {
    const { state, dispatch } = useContext(context)
    const {name, modalShow} = state.workspacePage;
    const id = Storage.get('user').id;

    const handleShow = () =>  dispatch(modalShowAction())
    const handleClose =() => dispatch(modalHideAction())

    useEffect(() => {
        const user = Storage.get('user');
        if (user) {
            byId(user.id).then(data => {
                dispatch(getNameAction(data));
                
            })
        }
    }, [])

    return (
        <div className="main">
            <Header handleShow={handleShow} name={name} id={id}/>
            <ModalWindow show={modalShow} handleClose={handleClose} name={name} id={id} />
            <Items id={id} />
        </div >
    )
}

export default React.memo(WorkSpace);