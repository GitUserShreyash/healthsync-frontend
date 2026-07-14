import axiosInstance from "./axiosConfig";

export const getNutritionLogsApi = () => {
    return axiosInstance.get("/api/nutrition/today");
}

export const addNutritionLogApi = (request) => {
    return axiosInstance.post("/api/nutrition", request);
}

export const deleteNutritionLogApi = (id) => {
    return axiosInstance.delete(`/api/nutrition/${id}`);
}

export const getDailyCaloriesHistoryApi = () => {
    return axiosInstance.get("/api/nutrition/daily-calories");
}