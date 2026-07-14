import axiosInstance from "./axiosConfig";

export const getAllFoodsApi = () => {
    return axiosInstance.get("/api/foods");
}

export const getByCategoryApi = (category) => {
    return axiosInstance.get(`/api/foods/category/${category}`);
}