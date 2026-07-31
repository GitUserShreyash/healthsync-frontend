import {
  getWorkoutSummaryApi,
  getTodayWorkoutApi,
  getWorkoutPlanApi,
  logWorkoutApi,
  getWorkoutHistoryApi,
  deleteWorkoutApi,
} from "../api/workoutApi";

export const getWorkoutSummary = async () => {
  try {
    return await getWorkoutSummaryApi();
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getTodayWorkout = async () => {
  try {
    const response = await getTodayWorkoutApi();
    console.log("Today's workout:", response);
    return response;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getWorkoutPlan = async () => {
  try {
    const response = await getWorkoutPlanApi();
    console.log("Workout plan:", response);
    return response;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const logWorkout = async (request) => {
  try {
    return await logWorkoutApi(request);
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getWorkoutHistory = async () => {
  try {
    return await getWorkoutHistoryApi();
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const deleteWorkout = async (id) => {
  try {
    return await deleteWorkoutApi(id);
  } catch (error) {
    throw error.response?.data || error;
  }
};