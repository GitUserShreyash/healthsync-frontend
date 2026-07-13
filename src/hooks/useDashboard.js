import { useCallback, useEffect, useState } from "react";
import dashboardService from "../services/dashboardService";

function useDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const dashboardData = await dashboardService.getDashboard();

      setDashboard(dashboardData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    dashboard,
    setDashboard,
    loading,
    error,
    fetchDashboard,
  };
}

export default useDashboard;
