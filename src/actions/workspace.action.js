
export const modalShowAction = () =>{
    return{
        type : "Modal_Show"
    }
}

export const modalHideAction = () =>{
    return{
        type : "Modal_Hide"
    }
}

export const getNameAction = (data) =>{
    return {
        type: 'GetName', 
        payload: `${data.lastname} ${data.username}` 
    }
}

export const newPostAction = (event,data) =>{
    const { target: { name, value } } = event;
    return {
        type: 'New_Post', 
        payload: { ...data, [name]: value }
    }
}