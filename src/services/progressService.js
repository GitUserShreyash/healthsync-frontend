import {getProgressApi} from "../api/progressApi";

export const getProgress = async (days)=>{
    const response = await getProgressApi(days);
    console.log("progressService:getProgress response:", response);
    return response.data;
}