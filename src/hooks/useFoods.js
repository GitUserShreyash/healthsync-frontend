import { useCallback, useEffect, useState } from "react";
import { getAllFoods, getByCategory } from "../services/foodService";

function useFoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getAllFoods();
      console.log("Fetched Foods:", data);
      setFoods(data);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFoodsByCategory = async (category) => {
    try {
      setLoading(true);

      const data = await getByCategory(category);
      setFoods(data);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return {
    foods,
    loading,
    fetchFoods,
    fetchFoodsByCategory,
  };
}

export default useFoods;