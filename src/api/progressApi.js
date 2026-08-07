import axiosInstance from "./axiosConfig";


export const getProgressApi = (days) => {
    return axiosInstance.get(`/api/progress/${days}`);
};