import { FaRobot } from "react-icons/fa";

function AiInsightsCard() {
  const insights = [
    "🔥 You consumed 200 fewer calories today.",
    "💧 Drink 500ml more water to hit your goal.",
    "🏋 Great workout consistency this week.",
    "😴 Try sleeping 30 minutes earlier.",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-emerald-600 text-2xl" />

        <h2 className="text-xl font-semibold">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-slate-50 p-2 rounded-xl"
          >
            {insight}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AiInsightsCard;