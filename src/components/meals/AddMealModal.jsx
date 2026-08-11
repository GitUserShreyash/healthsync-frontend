import { useMemo, useState } from "react";

function AddMealModal({ foods = [], onAddMeal, onClose, loading }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [selectedFood, setSelectedFood] = useState(null);

  const [mealType, setMealType] = useState("BREAKFAST");
  const [quantity, setQuantity] = useState("100");

  const categories = ["ALL", "BREAKFAST", "LUNCH", "DINNER", "SNACK"];

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesSearch = food.foodName
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "ALL" ||
        food.category
          ?.split(",")
          .map((c) => c.trim().toLowerCase())
          .includes(category.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [foods, search, category]);

  console.log("Filtered Foods:", filteredFoods);

  const nutrition = useMemo(() => {
    if (!selectedFood) {
      return {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0,
        sugar: 0,
        sodium: 0,
      };
    }

    const multiplier = quantity / 100;

    return {
      calories: selectedFood.caloriesPer100g * multiplier,
      protein: selectedFood.proteinPer100g * multiplier,
      carbs: selectedFood.carbsPer100g * multiplier,
      fat: selectedFood.fatPer100g * multiplier,
      fiber: selectedFood.fiberPer100g * multiplier,
      sugar: selectedFood.sugarPer100g * multiplier,
      sodium: selectedFood.sodiumPer100g * multiplier,
    };
  }, [selectedFood, quantity]);

  const handleSubmit = async () => {
    if (!selectedFood || quantity <= 0) return;

    const nutritionRequest = {
      foodName: selectedFood.foodName,
      quantity,
      mealType,
      calories: Number(nutrition.calories.toFixed(2)),
      protein: Number(nutrition.protein.toFixed(2)),
      carbs: Number(nutrition.carbs.toFixed(2)),
      fat: Number(nutrition.fat.toFixed(2)),
      fiber: Number(nutrition.fiber?.toFixed(2)) || 0,
      sugar: Number(nutrition.sugar?.toFixed(2)) || 0,
      sodium: Number(nutrition.sodium?.toFixed(2)) || 0,
    };

    const result = await onAddMeal(nutritionRequest);

    if (result?.success !== false) {
      setSearch("");
      setCategory("ALL");
      setSelectedFood(null);
      setQuantity(100);
      setMealType("BREAKFAST");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Add Meal</h2>

          <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Food List */}
        <div className="border border-gray-200 rounded-xl max-h-60 overflow-y-auto">
          {filteredFoods.length === 0 ? (
            <p className="text-center text-gray-400 p-5">No food found</p>
          ) : (
            filteredFoods.map((food) => (
              <button
                key={food.id}
                onClick={() => {
                  console.log("Selected Food:", food);
                  setSelectedFood(food);
                }}
                className={`w-full text-left p-3 border-b border-gray-100 hover:bg-emerald-50 transition ${
                  selectedFood?.id === food.id ? "bg-emerald-100" : ""
                }`}
              >
                <p className="font-medium">{food.foodName}</p>

                <p className="text-sm text-gray-500">
                  {food.caloriesPer100g} kcal /100g
                  {" • "}
                  {food.category}
                </p>
              </button>
            ))
          )}
        </div>

        {/* Meal Type and Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {/* Meal Type */}
          <div>
            <label className="block mb-2 font-medium">Meal Type</label>

            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="BREAKFAST">Breakfast</option>
              <option value="LUNCH">Lunch</option>
              <option value="DINNER">Dinner</option>
              <option value="SNACK">Snack</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-2 font-medium">Quantity (grams)</label>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Nutrition Preview */}
        {selectedFood && (
          <div className="bg-gray-50 rounded-xl p-4 mt-5">
            <h3 className="font-semibold mb-4">Nutrition Preview</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500">Calories</p>
                <p className="font-semibold">{nutrition.calories.toFixed(0)}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Protein</p>
                <p className="font-semibold">{nutrition.protein.toFixed(1)}g</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Carbs</p>
                <p className="font-semibold">{nutrition.carbs.toFixed(1)}g</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Fat</p>
                <p className="font-semibold">{nutrition.fat.toFixed(1)}g</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Fiber</p>
                <p className="font-semibold">{nutrition.fiber.toFixed(1)}g</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Sugar</p>
                <p className="font-semibold">{nutrition.sugar.toFixed(1)}g</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Sodium</p>
                <p className="font-semibold">{nutrition.sodium.toFixed(0)}mg</p>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            disabled={!selectedFood || loading}
            onClick={handleSubmit}
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Adding..." : "Add Meal"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMealModal;
