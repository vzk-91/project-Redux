
let initialState = {
    registrationData : {
        lastname: '',
        username: '',
        password: "",
        email: ''
    },
}

const registrationPageReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "Registration":
            return {
                ...state,
                registrationData: action.payload
            }
            default:
                return state;
}
}
export default registrationPageReducer;