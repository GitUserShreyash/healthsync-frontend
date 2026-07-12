import { useMemo, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function AddMealModal({ onClose, onAddMeal }) {
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mealType, setMealType] = useState("BREAKFAST");

  // Dummy foods for now
  const foods = [
    {
      id: 1,
      foodName: "Chicken Biryani",
      calories: 650,
      protein: 30,
      carbs: 70,
      fat: 20,
    },
    {
      id: 2,
      foodName: "Poha",
      calories: 250,
      protein: 6,
      carbs: 45,
      fat: 5,
    },
    {
      id: 3,
      foodName: "Milk",
      calories: 150,
      protein: 8,
      carbs: 12,
      fat: 8,
    },
    {
      id: 4,
      foodName: "Paneer Curry",
      calories: 500,
      protein: 25,
      carbs: 20,
      fat: 30,
    },
  ];

  const filteredFoods = useMemo(() => {
    return foods.filter((food) =>
      food.foodName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const handleAddMeal = () => {
    if (!selectedFood) return;

    const consumedMeal = {
      ...selectedFood,
      mealType,
      quantity,
      calories: selectedFood.calories * quantity,
      protein: selectedFood.protein * quantity,
      carbs: selectedFood.carbs * quantity,
      fat: selectedFood.fat * quantity,
    };

    if (onAddMeal) {
      onAddMeal(consumedMeal);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-5xl rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Add Meal
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-black"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              py-3
              pl-12
              pr-4
              outline-none
              focus:ring-2
              focus:ring-emerald-500
            "
          />
        </div>

        {/* Search Results */}
        {!selectedFood && (
          <div className="max-h-80 overflow-y-auto space-y-3">
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <div
                  key={food.id}
                  className="
                    border
                    rounded-xl
                    p-5
                    flex
                    justify-between
                    items-center
                    hover:bg-slate-50
                  "
                >
                  <div>
                    <h3 className="font-semibold text-lg">
                      {food.foodName}
                    </h3>

                    <p className="text-slate-500">
                      {food.calories} cal
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setSelectedFood(food)
                    }
                    className="
                      bg-emerald-600
                      text-white
                      px-5
                      py-2
                      rounded-lg
                    "
                  >
                    Select
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500">
                  No food found.
                </p>

                <button
                  className="
                    mt-4
                    text-emerald-600
                    font-semibold
                  "
                >
                  + Add Custom Food
                </button>
              </div>
            )}
          </div>
        )}

        {/* Selected Food */}
        {selectedFood && (
          <div className="border rounded-2xl p-8 bg-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">
                  {selectedFood.foodName}
                </h3>

                <p className="text-slate-500 mt-2">
                  Per Serving
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedFood(null)
                }
                className="text-emerald-600"
              >
                Change Food
              </button>
            </div>

            {/* Nutrition */}
            <div className="grid grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-500">
                  Calories
                </p>

                <h4 className="text-2xl font-bold">
                  {selectedFood.calories}
                </h4>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-500">
                  Protein
                </p>

                <h4 className="text-2xl font-bold">
                  {selectedFood.protein} g
                </h4>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-500">
                  Carbs
                </p>

                <h4 className="text-2xl font-bold">
                  {selectedFood.carbs} g
                </h4>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-500">
                  Fat
                </p>

                <h4 className="text-2xl font-bold">
                  {selectedFood.fat} g
                </h4>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block mb-2 font-medium">
                  Quantity
                </label>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Meal Type
                </label>

                <select
                  value={mealType}
                  onChange={(e) =>
                    setMealType(e.target.value)
                  }
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                  "
                >
                  <option value="BREAKFAST">
                    Breakfast
                  </option>

                  <option value="LUNCH">
                    Lunch
                  </option>

                  <option value="DINNER">
                    Dinner
                  </option>

                  <option value="SNACK">
                    Snack
                  </option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={onClose}
                className="
                  px-5
                  py-3
                  border
                  rounded-xl
                "
              >
                Cancel
              </button>

              <button
                onClick={handleAddMeal}
                className="
                  bg-emerald-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                "
              >
                Add Meal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddMealModal;