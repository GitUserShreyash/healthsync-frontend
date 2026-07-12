import { useState } from "react";
import { FaTimes, FaClock, FaFire } from "react-icons/fa";

export default function WorkoutDetailsModal({ plan, onClose }) {
  if (!plan) return null;
    const [completed, setCompleted] = useState(plan.completed);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-212.5 rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              {plan.day} - {plan.workoutName}
            </h2>

            <p className="text-slate-500 mt-2">{plan.muscleGroup}</p>
          </div>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {plan.exercises.map((exercise) => (
            <div key={exercise.id} className="border rounded-xl p-5">
              <h3 className="font-bold text-lg">{exercise.exerciseName}</h3>

              <p className="mt-3">Sets : {exercise.sets}</p>

              <p>Reps : {exercise.reps}</p>

              <p>Weight : {exercise.weight} kg</p>

              <p>Rest : {exercise.restSeconds}s</p>
            </div>
          ))}
        </div>

        <div className="flex gap-10 mt-8">
          <div className="flex items-center gap-2">
            <FaClock />
            {plan.duration} mins
          </div>

          <div className="flex items-center gap-2">
            <FaFire />
            {plan.calories} kcal
          </div>
        </div>

        <button
          className="mt-8 w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold"
          onClick={() => {
            setCompleted(true);
            if (typeof onClose === "function") onClose();
          }}
        >
          Complete Workout
        </button>
      </div>
    </div>
  );
}
