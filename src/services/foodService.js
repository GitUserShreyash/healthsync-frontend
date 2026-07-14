import { getAllFoodsApi, getByCategoryApi } from "../api/foodApi";

export const getAllFoods = async () => {
    const response = await getAllFoodsApi();
    return response.data;
};

export const getByCategory = async (category) => {
    const response = await getByCategoryApi(category);
    return response.data;
};
