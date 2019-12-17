import React, { useEffect, useContext } from 'react';
import context from '../../context/context'
import { getPostById, getPost,remove } from '../../api/index';
import { Spinner,Button } from 'react-bootstrap';
import {postsFetchAction,spinnerAction} from '../../actions'




const Items = ({id}) => {
    const { state, dispatch } = useContext(context)
    const { posts } = state.posts;
    const {loading} = state.spinner

    
console.log(posts,id)
    useEffect(() => {
            getPostById(id).then(function (data) {
                dispatch(postsFetchAction(data))
                dispatch(spinnerAction())
            });
    }, [posts])
    

    const removePost = (itemId)=>{
        remove(itemId)
        }
    
    return (
        <div className="content">
            {loading && <Spinner animation="grow" variant="danger" className="spiner" />}
            {
                posts.map((item) => {
                    return <div className='item' key={item.id}>
                        <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>{id && <Button variant="danger" onClick={()=> removePost(item.id)}  className='remove'> &times;</Button>}  </div>
                        <div className='discription'> {item.description}</div>
                    </div>
                })
            }
        </div>
    )
}

export default React.memo(Items);