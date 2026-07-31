export default function WorkoutPlanCard({workout}) {
  console.log("WorkoutPlanCard workout:", workout);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {workout.workoutType}
      </h3>
      <p className="text-gray-600 mb-4">{workout.description}</p>
      <div className="flex justify-between items-center">
        <div className="bg-[#E8FFF5] rounded-xl px-4 py-2 text-center">
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-xl font-bold text-[#00BC7D]">
            {workout.targetDurationMinutes}
          </p>
          <p className="text-sm text-gray-500">minutes</p>
        </div>
      </div>
    </div>  
  );
}
