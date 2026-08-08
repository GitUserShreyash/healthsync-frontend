function TodayWorkoutCard({ workout, status }) {
  if (!status) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm h-full">
        <h2 className="text-lg font-semibold text-gray-900">Today's Workout</h2>

        <div className="mt-8 flex h-[250px] flex-col items-center justify-center text-center">
          <div className="text-5xl">💪</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Workout Pending
          </h3>

          <p className="mt-2 text-gray-500">
            You haven't completed today's workout yet.
          </p>

          <button className="mt-6 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Go to Workout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-900">Today's Workout</h2>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{workout.workoutType}</h3>

          <p className="text-gray-500">{workout.description}</p>
        </div>

        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          ✅ Completed
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold">{workout.exercises.length}</p>
          <p className="text-sm text-gray-500">Exercises</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold">100%</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 font-semibold text-gray-900">Exercises</h4>

        <div className="space-y-2">
          {workout.exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <span>{exercise.exerciseName}</span>

              <span className="text-green-600">✓</span>
            </div>
          ))}
        </div>
      </div>

      {/* <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700">
        View Workout Details
      </button> */}
    </div>
  );
}

export default TodayWorkoutCard;
