import React,{ useEffect,useContext} from 'react';
import context from '../../../context/context'
import {getPost} from '../../../api/index';
import {Spinner} from 'react-bootstrap';
import './post.css'
import {postsFetchAction,spinnerAction} from '../../../actions'



const Posts = () => {
    const {state,dispatch} = useContext(context)
    const {posts} = state.posts;
    const {loading} = state.spinner

    useEffect(()=>{
        getPost().then(function (data) { 
            dispatch(postsFetchAction(data))
            dispatch(spinnerAction())
      });
  },[posts])
  
    return(

       <div className="contentpost">
            {loading  &&  <Spinner animation="grow" variant="danger" className="spiner"/> }
        {
            posts.map((item)=>{
             return   <div className='item' key={item.id}>
                <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>   </div>
                <div className='discription'> {item.description}</div>
                </div>
            })
        }
       </div> 
    )
}


export default React.memo(Posts);