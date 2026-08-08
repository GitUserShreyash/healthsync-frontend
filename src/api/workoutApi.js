import axiosInstance from "./axiosConfig";

export const getWorkoutSummaryApi = async () => {
  const response = await axiosInstance.get("/api/workout/summary");
  return response.data;
};

export const getTodayWorkoutApi = async () => {
  const response = await axiosInstance.get("/api/workout/today");
  return response.data;
};

export const getWorkoutPlanApi = async () => {
  const response = await axiosInstance.get("/api/workout/plan");
  return response.data;
};

export const logWorkoutApi = async (request) => {
  const response = await axiosInstance.post("/api/workout/log", request);
  return response.data;
};

export const getWorkoutHistoryApi = async () => {
  const response = await axiosInstance.get("/api/workout/history");
  return response.data;
};

export const deleteWorkoutApi = async (id) => {
  const response = await axiosInstance.delete(`/api/workout/${id}`);
  return response.data;
};

export const getTodayStatusApi = async () => {
  const response = await axiosInstance.get("/api/workout/today/status");
  console.log("getTodayStatusApi response:", response);
  return response.data;
};