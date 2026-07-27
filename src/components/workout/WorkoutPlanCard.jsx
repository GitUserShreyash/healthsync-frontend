export default function WorkoutPlanCard({
  workout,

  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
bg-blue-50
border
rounded-xl
p-5
cursor-pointer
hover:shadow-md
"
    >
      <h3
        className="
font-bold
text-lg"
      >
        {workout.day}
      </h3>

      <p
        className="
text-blue-600
font-semibold
mt-2"
      >
        {workout.workoutType}
      </p>

      <p
        className="
text-gray-600
text-sm
mt-2"
      >
        {workout.description}
      </p>

      <div
        className="
flex
justify-between
mt-4
text-sm
"
      >
        <span>⏱ {workout.targetDurationMinutes} min</span>

        <span>{workout.completed ? "Completed ✅" : "Pending"}</span>
      </div>
    </div>
  );
}
