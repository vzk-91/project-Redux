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
                            case "REMOVE_ID" :
                                return{
                                    ...state,
                                    id : ""
                                }
            default:
                return state;
}
}
export default userIDReducer;