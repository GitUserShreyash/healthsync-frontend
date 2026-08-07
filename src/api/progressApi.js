import axiosInstance from './axiosInstance';

export const getProgressApi = (days) => {
    return axiosInstance.get(`/api/progress/${days}`);
};