import FoodRow from "./FoodRow";

function MealGroup({
  title,
  icon,
  foods,
}) {
  const totalCalories = foods.reduce(
    (sum, food) => sum + food.calories,
    0
  );

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {icon} {title}
        </h2>

        <span className="font-semibold">
          {totalCalories} cal
        </span>
      </div>

      <div className="space-y-2">
        {foods.map((food) => (
          <FoodRow
            key={food.id}
            food={food}
          />
        ))}
      </div>

      <button className="mt-4 text-emerald-600 font-medium">
        + Add
      </button>
    </div>
  );
}

export default MealGroup;