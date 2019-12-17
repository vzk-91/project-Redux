export const loginAction = (event,data) =>{
    const { target: { name, value } } = event;
    return {
        type : 'Login',
        payload : {...data,[name] : value}
    }
}

export const logOutAction = () =>{
    return {
        type: 'REMOVE_ID' 
    }
}

export const idAction = (data) =>{
    return {
        type: 'ID',
        payload: data.id 
    }
}