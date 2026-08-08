function TodayMealsCard({ meals = [] }) {
  const totalCalories = meals.reduce((sum, item) => sum + item.calories, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-5">Today's Meals</h2>

      <div className="space-y-4">
        {meals.length === 0 ? (
          <p className="text-gray-500">No meals logged today</p>
        ) : (
          meals.map((meal, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{meal.foodName}</p>

                <p className="text-sm text-gray-500">{meal.mealType}</p>
              </div>

              <span>{meal.calories} kcal</span>
            </div>
          ))
        )}
      </div>

      <div className="border-t mt-6 pt-4 flex justify-between font-bold">
        <span>Total</span>

        <span>{totalCalories} kcal</span>
      </div>
    </div>
  );
}

export default TodayMealsCard;
