import React, {  useEffect,useContext } from 'react';
import context from '../../../context/context'
import './blogers.css';
import { Spinner } from 'react-bootstrap';
import { getPeople } from '../../../api/index';
import {blogersFetchAction,spinnerAction} from '../../../actions'



const Blogers = () => {
    const {state,dispatch} = useContext(context)
   
    const {blogers} = state.blogers
    const {loading} = state.spinner
    useEffect(() => {
        getPeople().then(function (data) {
            dispatch(blogersFetchAction(data))
            dispatch(spinnerAction())
        });
    }, [])
    

    return (
        <div className="blogers" >
            <h2>Blogers</h2>
            {loading && <Spinner animation="grow" variant="danger" className="spiner" />}
            {blogers.map((item) => {
                return <div className='item-bloger' key={item.id}>
                    <img src={item.avatar} alt="" className="phot" />
                    <p> {item.name}</p>
                </div>
            })}
        </div>
    )
}

export default React.memo(Blogers);;