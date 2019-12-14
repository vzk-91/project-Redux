
let initialState = {
    posts: [{
        author : '',
        id : '',
        description : '',
        title : ""

    }],
}

const postReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "Fetch_Posts":
            return {
                ...state,
                posts: action.payload
            }
            default:
                return state;
}
}
export default postReducer;