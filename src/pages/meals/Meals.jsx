import { meals } from "../../data/mealsData";
import CaloriesSummary from "../../components/meals/CaloriesSummary";
import MealGroup from "../../components/meals/MealGroup";
import { useState } from "react";
import AddMealModal from "../../components/meals/AddMealModal";

function Meals() {
  const [showModal, setShowModal] = useState(false);
  const consumed = meals.reduce((sum, meal) => sum + meal.calories, 0);

  const breakfast = meals.filter((m) => m.mealType === "BREAKFAST");

  const lunch = meals.filter((m) => m.mealType === "LUNCH");

  const dinner = meals.filter((m) => m.mealType === "DINNER");

  const snacks = meals.filter((m) => m.mealType === "SNACK");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meals</h1>

        <button
          onClick={() => setShowModal(true)}
          className=" bg-emerald-600 text-white px-5 py-3 rounded-xl"
        >
          + Add Meal
        </button>
      </div>

      <CaloriesSummary consumed={consumed} />

      <div className="grid grid-cols-2 gap-6">
        <MealGroup title="Breakfast" icon="🍳" foods={breakfast} />

        <MealGroup title="Lunch" icon="🍛" foods={lunch} />

        <MealGroup title="Dinner" icon="🍲" foods={dinner} />

        <MealGroup title="Snacks" icon="🥜" foods={snacks} />
      </div>
      {showModal && <AddMealModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Meals;
