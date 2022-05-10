import { aboutConstants } from "../actions/constants";

const initState = {
    about: [],
    error: null
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case aboutConstants.GET_ALL_ABOUT_REQUEST:
            state = {
                ...state,
            }
            break;
        case aboutConstants.GET_ALL_ABOUT_SUCCESS:
            state = {
                ...state,
                about: action.payload.about
            }
            break;
        case aboutConstants.GET_ALL_ABOUT_FAILURE:
            state = {
                ...initState
            }
            break;
        default:
            return state;
    }
    return state;
}

export default reducer;