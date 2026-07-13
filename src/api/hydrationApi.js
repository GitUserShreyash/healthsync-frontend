import axiosInstance from "./axiosConfig";

export const getHydrationLogsApi = () => {
  return axiosInstance.get("/api/hydration");
};

export const addHydrationLogApi = (request) => {
  return axiosInstance.post("/api/hydration", request);
};

export const deleteHydrationLogApi = (id) => {
  return axiosInstance.delete(`/api/hydration/${id}`);
};

export const getHydrationHistoryApi = () => {
  return axiosInstance.get("/api/hydration/history");
};