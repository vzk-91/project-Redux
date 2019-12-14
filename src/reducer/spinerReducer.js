
let initialState = {
    loading: true,
}

const spinerReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "Spinner" :
            return{
                ...state,
                loading : false,
            }
            default:
                return state;
}
}
export default spinerReducer;