import { bannerConstants } from "../actions/constants";

const initState = {
    banners: [],
    error: null
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case bannerConstants.GET_ALL_BANNER_REQUEST:
            state = {
                ...state,
            }
            break;
        case bannerConstants.GET_ALL_BANNER_SUCCESS:
            state = {
                ...state,
                banners: action.payload.banners
            }
            break;
        case bannerConstants.GET_ALL_BANNER_FAILURE:
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