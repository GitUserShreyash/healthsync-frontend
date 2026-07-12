function TodayMealsCard() {
  const meals = [
    {
      id: 1,
      name: "Breakfast",
      calories: 450,
      emoji: "🍳",
    },
    {
      id: 2,
      name: "Lunch",
      calories: 700,
      emoji: "🍛",
    },
    {
      id: 3,
      name: "Dinner",
      calories: 600,
      emoji: "🍲",
    },
    {
      id: 4,
      name: "Snacks",
      calories: 200,
      emoji: "🥜",
    },
  ];

  const totalCalories = meals.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-6">
        Today's Meals
      </h2>

      <div className="space-y-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {meal.emoji}
              </span>

              <span className="font-medium">
                {meal.name}
              </span>
            </div>

            <span className="text-slate-600">
              {meal.calories} cal
            </span>
          </div>
        ))}
      </div>

      <div className="border-t mt-6 pt-4 flex justify-between font-bold">
        <span>Total</span>
        <span>{totalCalories} cal</span>
      </div>
    </div>
  );
}

export default TodayMealsCard;