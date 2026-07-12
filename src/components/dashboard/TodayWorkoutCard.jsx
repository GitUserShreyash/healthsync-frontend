function TodayWorkoutCard() {
  const workouts = [
    {
      id: 1,
      name: "Running",
      value: "30 min",
      duration: 30,
      emoji: "🏃",
    },
    {
      id: 2,
      name: "Push Ups",
      value: "15 reps",
      duration: 0,
      emoji: "💪",
    },
    {
      id: 3,
      name: "Bench Press",
      value: "3 sets",
      duration: 0,
      emoji: "🏋",
    },
    {
      id: 4,
      name: "Cycling",
      value: "20 min",
      duration: 20,
      emoji: "🚴",
    },
  ];

  const totalDuration = workouts.reduce(
    (sum, workout) => sum + workout.duration,
    0
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-6">
        Today's Workout
      </h2>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {workout.emoji}
              </span>

              <span className="font-medium">
                {workout.name}
              </span>
            </div>

            <span className="text-slate-600">
              {workout.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t mt-6 pt-4 flex justify-between font-bold">
        <span>Total Duration</span>
        <span>{totalDuration} min</span>
      </div>
    </div>
  );
}

export default TodayWorkoutCard;