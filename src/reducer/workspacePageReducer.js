let initialState = {
    name: '',
    newPost: {
        description: '',
        title: '',
    },
    modalShow: false,
}

const workspacePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Modal_Show":
            return {
                ...state,
                modalShow: true,
            }
            case "Modal_Hide":
                return {
                    ...state,
                    modalShow: false,
                }
                case "GetName":
                    return {
                        ...state,
                        name: action.payload
                    }
                    case "New_Post":
                        return {
                            ...state,
                            newPost: action.payload
                        }
                default:
                    return state;
    }
}
export default workspacePageReducer;