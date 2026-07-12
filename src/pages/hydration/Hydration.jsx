import HydrationSummary from "../../components/hydration/HydrationSummary";
import QuickAddButtons from "../../components/hydration/QuickAddButtons";
import WaterLogList from "../../components/hydration/WaterLogList";

function Hydration() {
  const logs = [
    {
      id: 1,
      amount: 500,
      time: "08:30 AM",
    },
    {
      id: 2,
      amount: 250,
      time: "11:00 AM",
    },
    {
      id: 3,
      amount: 750,
      time: "02:15 PM",
    },
  ];

  const totalWater = logs.reduce((sum, log) => sum + log.amount, 0);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hydration</h1>

        <button
          className="
            bg-emerald-600
            text-white
            px-5
            py-3
            rounded-xl
          "
        >
          + Log Water
        </button>
      </div>

      <HydrationSummary totalWater={totalWater} />

      <QuickAddButtons />

      <WaterLogList logs={logs} />
    </div>
  );
}

export default Hydration;
