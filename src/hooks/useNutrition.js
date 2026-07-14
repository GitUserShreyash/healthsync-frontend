import { useCallback, useEffect, useState } from "react";
import {
  addNutritionLog,
  deleteNutritionLog,
  getDailyCaloriesHistory,
  getNutritionLogs,
} from "../services/nutritionService";

function useNutrition() {
  const [nutritionLogs, setNutritionLogs] = useState([]);
  const [dailyCalories, setDailyCalories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchNutritionLogs = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getNutritionLogs();
      setNutritionLogs(data);
    } catch (error) {
      console.error("Failed to fetch nutrition logs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchDailyCaloriesHistory = useCallback(async () => {
    try {
      const data = await getDailyCaloriesHistory();
      setDailyCalories(data);
    } catch (error) {
      console.error("Failed to fetch daily calories:", error);
    }
  }, []);

  useEffect(() => {
    fetchNutritionLogs();
    fetchDailyCaloriesHistory();
  }, [fetchNutritionLogs, fetchDailyCaloriesHistory]);

  const addLog = async (nutritionRequest) => {
    try {
      setSaving(true);

      const response = await addNutritionLog(nutritionRequest);

      await fetchNutritionLogs();
      await fetchDailyCaloriesHistory();

      return {
        success: true,
        message: "Meal logged successfully.",
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Failed to log meal.",
      };
    } finally {
      setSaving(false);
    }
  };

  const removeLog = async (logId) => {
    try {
      setSaving(true);

      const message = await deleteNutritionLog(logId);

      await fetchNutritionLogs();
      await fetchDailyCaloriesHistory();

      return {
        success: true,
        message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Failed to delete meal.",
      };
    } finally {
      setSaving(false);
    }
  };

  return {
    nutritionLogs,
    dailyCalories,
    loading,
    saving,
    addLog,
    removeLog,
    refreshNutritionLogs: fetchNutritionLogs,
    refreshDailyCalories: fetchDailyCaloriesHistory,
  };
}

export default useNutrition;
