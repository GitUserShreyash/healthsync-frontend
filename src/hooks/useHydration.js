import { useCallback, useEffect, useState } from "react";
import hydrationService from "../services/hydrationService";

function useHydration() {
  const [hydrationLogs, setHydrationLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Fetch today's hydration logs
  const fetchHydrationLogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await hydrationService.getHydrationLogs();

      setHydrationLogs(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load hydration logs."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Add hydration log
  const addHydrationLog = async (request) => {
    try {
      setSaving(true);
      setError(null);

      const newLog = await hydrationService.addHydrationLog(request);

      setHydrationLogs((prev) => [newLog, ...prev]);

      return {
        success: true,
        message: "Water intake logged successfully.",
      };
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to log water intake.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setSaving(false);
    }
  };

  // Delete hydration log
  const deleteHydrationLog = async (logId) => {
    try {
      setSaving(true);
      setError(null);

      await hydrationService.deleteHydrationLog(logId);

      setHydrationLogs((prev) =>
        prev.filter((log) => log.id !== logId)
      );

      return {
        success: true,
        message: "Hydration log deleted.",
      };
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to delete hydration log.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setSaving(false);
    }
  };

  // Fetch hydration history
  const fetchHydrationHistory = async () => {
    try {
      return await hydrationService.getHydrationHistory();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load hydration history."
      );
      return [];
    }
  };

  useEffect(() => {
    fetchHydrationLogs();
  }, [fetchHydrationLogs]);

  return {
    hydrationLogs,
    setHydrationLogs,

    loading,
    saving,
    error,

    fetchHydrationLogs,
    fetchHydrationHistory,

    addHydrationLog,
    deleteHydrationLog,
  };
}

export default useHydration;