import { useState } from "react";

function MealGroup({ title, icon, meals = [], onDelete }) {
  const [expandedMeal, setExpandedMeal] = useState(null);

  const toggleMeal = (id) => {
    setExpandedMeal(expandedMeal === id ? null : id);
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
      "
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">{icon}</span>

        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {meals.length === 0 ? (
        <div
          className="
              h-32
              flex
              items-center
              justify-center
              text-gray-400
              border
              rounded-xl
              border-dashed
            "
        >
          No meals logged
        </div>
      ) : (
        <div className="space-y-3">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="
                    border
                    rounded-xl
                    overflow-hidden
                    transition
                  "
            >
              {/* Main Meal Row */}

              <div
                onClick={() => toggleMeal(meal.id)}
                className="
                      p-4
                      flex
                      justify-between
                      items-center
                      cursor-pointer
                      hover:bg-gray-50
                    "
              >
                <div>
                  <h3 className="font-semibold">{meal.foodName}</h3>

                  <p className="text-sm text-gray-500">{meal.quantity} g</p>

                  <div className="flex gap-3 mt-2 text-xs text-gray-500">
                    <span>🥩 {meal.protein}g protein</span>

                    <span>🔥 {meal.calories} kcal</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-gray-400">
                    {expandedMeal === meal.id ? "▲" : "▼"}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(meal.id);
                    }}
                    className="
                          text-white bg-red-500 hover:bg-red-800 rounded-md
                        "
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Expanded Details */}

              {expandedMeal === meal.id && (
                <div
                  className="
                          bg-gray-50
                          border-t
                          p-4
                          grid
                          grid-cols-2
                          gap-4
                          text-sm
                        "
                >
                  <NutritionItem
                    label="Calories"
                    value={`${meal.calories} kcal`}
                  />

                  <NutritionItem label="Protein" value={`${meal.protein} g`} />

                  <NutritionItem label="Carbs" value={`${meal.carbs} g`} />

                  <NutritionItem label="Fat" value={`${meal.fat} g`} />

                  <NutritionItem label="Fiber" value={`${meal.fiber ?? 0} g`} />

                  <NutritionItem label="Sugar" value={`${meal.sugar ?? 0} g`} />

                  <NutritionItem
                    label="Sodium"
                    value={`${meal.sodium ?? 0} mg`}
                  />

                  <NutritionItem label="Meal Type" value={meal.mealType} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NutritionItem({ label, value }) {
  return (
    <div
      className="
        bg-white
        rounded-lg
        p-3
        border
      "
    >
      <p className="text-gray-500">{label}</p>

      <p className="font-semibold">{value}</p>
    </div>
  );
}

export default MealGroup;
