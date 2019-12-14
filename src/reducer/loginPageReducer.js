let initialState = {
    loginData: {
        password: '',
        email: ''
    },
    id : ""
}

const loginPageReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "Login":
                    return {
                        ...state,
                        loginData: action.payload
                    }
                    case "LOGOUT" :
                        return{
                            ...state,
                            id : ''
                        }
            default:
                return state;
}
}
export default loginPageReducer;