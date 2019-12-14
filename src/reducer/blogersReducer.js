
let initialState = {
    blogers: [],
    
}

const blogerReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "Fetch_Blogers":
            return {
                ...state,
                blogers: [...action.payload]
            }
            default:
                return state;
}
}
export default blogerReducer;