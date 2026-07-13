import { getDashboardApi } from "../api/dashboardApi";

const getDashboard = async () => {
  const response = await getDashboardApi();
  return response.data;
};

const dashboardService = {
  getDashboard,
};

export default dashboardService;