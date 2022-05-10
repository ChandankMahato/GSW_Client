import { toast, Zoom } from "react-toastify";
import axios from "../helpers/axios"
import { aboutConstants } from "./constants";

export const getAbout = () => {
    return async dispatch => {
        try{
            dispatch({ type: aboutConstants.GET_ALL_ABOUT_REQUEST});
            const res = await axios.get(`/getabout`);
            if(res.status === 200){
                dispatch({
                    type: aboutConstants.GET_ALL_ABOUT_SUCCESS,
                    payload: res.data
                });
            }else{
                dispatch({
                    type: aboutConstants.GET_ALL_ABOUT_FAILURE,
                    payload: {error: res.data.error}
                })
            };
        }catch(error){
            toast.error('Something Went Wrong, try refreshing', {position: 'top-left', transition:Zoom});
        }
    }
}