import { toast, Zoom } from "react-toastify";
import axios from "../helpers/axios"
import { bannerConstants } from "./constants";

export const getAllBanner = () => {
    return async dispatch => {
        try{
            dispatch({ type: bannerConstants.GET_ALL_BANNER_REQUEST});
            const res = await axios.get(`/getBanner`);
            console.log(res);
            if(res.status === 200){
                dispatch({
                    type: bannerConstants.GET_ALL_BANNER_SUCCESS,
                    payload: res.data
                });
            }else{
                dispatch({
                    type: bannerConstants.GET_ALL_BANNER_FAILURE,
                    payload: {error: res.data.error}
                })
            };
        }catch(error){
            toast.error('Something Went Wrong, try refreshing', {position: 'top-left', transition:Zoom});
        }
    }
}