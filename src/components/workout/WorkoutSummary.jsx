import {
  FaFire,
  FaClock,
  FaDumbbell,
  FaCalendarCheck,
} from "react-icons/fa";

export default function WorkoutSummary() {
  const cards = [
    {
      title: "Calories Burned",
      value: "320 kcal",
      icon: <FaFire className="text-red-500 text-2xl" />,
    },
    {
      title: "Workout Time",
      value: "45 mins",
      icon: <FaClock className="text-blue-500 text-2xl" />,
    },
    {
      title: "Completed",
      value: "2 / 6",
      icon: <FaDumbbell className="text-emerald-500 text-2xl" />,
    },
    {
      title: "This Week",
      value: "4 Workouts",
      icon: (
        <FaCalendarCheck className="text-purple-500 text-2xl" />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}