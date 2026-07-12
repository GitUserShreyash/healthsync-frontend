function FoodRow({ food }) {
  return (
    <div
      className="
        group
        border
        rounded-xl
        p-4
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-md
      "
    >
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium">
          {food.foodName}
        </h3>

        <span className="font-semibold text-emerald-600">
          {food.calories} cal
        </span>
      </div>

      {/* Hidden Nutrition Section */}
      <div
        className="
          max-h-0
          overflow-hidden
          opacity-0
          transition-all
          duration-300
          group-hover:max-h-40
          group-hover:opacity-100
          mt-0
          group-hover:mt-4
        "
      >
        <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600">
          <p>
            <span className="font-medium">
              Protein:
            </span>{" "}
            {food.protein} g
          </p>

          <p>
            <span className="font-medium">
              Carbs:
            </span>{" "}
            {food.carbs} g
          </p>

          <p>
            <span className="font-medium">
              Fat:
            </span>{" "}
            {food.fat} g
          </p>

          <p>
            <span className="font-medium">
              Fiber:
            </span>{" "}
            {food.fiber} g
          </p>

          <p>
            <span className="font-medium">
              Sugar:
            </span>{" "}
            {food.sugar} g
          </p>

          <p>
            <span className="font-medium">
              Sodium:
            </span>{" "}
            {food.sodium} mg
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodRow;