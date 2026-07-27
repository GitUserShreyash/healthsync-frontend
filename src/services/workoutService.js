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
    return await getTodayWorkoutApi();
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getWorkoutPlan = async () => {
  try {
    return await getWorkoutPlanApi();
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