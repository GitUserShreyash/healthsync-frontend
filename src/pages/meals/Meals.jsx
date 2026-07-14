import { useMemo, useState } from "react";
import CaloriesSummary from "../../components/meals/CaloriesSummary";
import MealGroup from "../../components/meals/MealGroup";
import AddMealModal from "../../components/meals/AddMealModal";
import useNutrition from "../../hooks/useNutrition";
import useFoods from "../../hooks/useFoods";
import useProfile from "../../hooks/useProfile";

function Meals() {

  const [showModal, setShowModal] = useState(false);

  const { profile } = useProfile();

  const {
    nutritionLogs = [],
    addLog,
    removeLog,
    saving,
  } = useNutrition();


  const { foods = [] } = useFoods();


  const recommendedCaloryIntake =
    profile?.recommendedCaloryIntake ?? 2000;



  const consumedCalories = nutritionLogs.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );



  const mealsByType = useMemo(() => {

    return {
      BREAKFAST: nutritionLogs.filter(
        meal => meal.mealType === "BREAKFAST"
      ),

      LUNCH: nutritionLogs.filter(
        meal => meal.mealType === "LUNCH"
      ),

      DINNER: nutritionLogs.filter(
        meal => meal.mealType === "DINNER"
      ),

      SNACK: nutritionLogs.filter(
        meal => meal.mealType === "SNACK"
      )
    };

  }, [nutritionLogs]);



  return (

    <div className="space-y-8">


      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold">
            Meals
          </h1>


          <p className="text-gray-500 mt-1">
            Track your daily nutrition
          </p>

        </div>



        <button
          onClick={() => setShowModal(true)}
          className="
            bg-emerald-600
            hover:bg-emerald-700
            text-white
            px-5
            py-3
            rounded-xl
          "
        >
          + Add Meal
        </button>


      </div>




      <CaloriesSummary
        consumed={consumedCalories}
        goal={recommendedCaloryIntake}
      />




      <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        gap-6
      ">


        <MealGroup
          title="Breakfast"
          icon="🍳"
          meals={mealsByType.BREAKFAST}
          onDelete={removeLog}
        />


        <MealGroup
          title="Lunch"
          icon="🍛"
          meals={mealsByType.LUNCH}
          onDelete={removeLog}
        />


        <MealGroup
          title="Dinner"
          icon="🍲"
          meals={mealsByType.DINNER}
          onDelete={removeLog}
        />


        <MealGroup
          title="Snacks"
          icon="🥜"
          meals={mealsByType.SNACK}
          onDelete={removeLog}
        />


      </div>




      {
        showModal && (

          <AddMealModal
            foods={foods}
            onAddMeal={addLog}
            loading={saving}
            onClose={() => setShowModal(false)}
          />

        )
      }



    </div>

  );
}


export default Meals;