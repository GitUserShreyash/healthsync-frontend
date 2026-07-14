import { getNutritionLogsApi, addNutritionLogApi, deleteNutritionLogApi, getDailyCaloriesHistoryApi } from "../api/nutritionApi";

export const getNutritionLogs = async () => {
    const response = await getNutritionLogsApi();
    return response.data;
};

export const addNutritionLog = async (nutritionRequest) => {
    const response = await addNutritionLogApi(nutritionRequest);
    return response.data;
};

export const deleteNutritionLog = async (logId) => {
    const response = await deleteNutritionLogApi(logId);
    return response.data;
};

export const getDailyCaloriesHistory = async () => {
    const response = await getDailyCaloriesHistoryApi();
    return response.data;
};