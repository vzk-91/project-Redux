let initialState = {
    id : ""
}

const userIDReducer = (state = initialState,action) =>{
    switch (action.type) {
                        case "ID" :
                            return{
                                ...state,
                                id : action.payload
                            }
            default:
                return state;
}
}
export default userIDReducer;