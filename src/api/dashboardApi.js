import axiosInstance from "./axiosConfig";

export const getDashboardApi = () => {
  console.log("getDashboardApi: Fetching dashboard data");
  return axiosInstance.get("/api/dashboard");
};