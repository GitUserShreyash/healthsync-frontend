import HydrationSummary from "../../components/hydration/HydrationSummary";
import QuickAddButtons from "../../components/hydration/QuickAddButtons";
import WaterLogList from "../../components/hydration/WaterLogList";
import useHydration from "../../hooks/useHydration";
import toast from "react-hot-toast";
import useProfile from "../../hooks/useProfile";
import { useState } from "react";
import WaterLogModal from "../../components/hydration/WaterLogModal";

function Hydration() {
  const {
    hydrationLogs,
    addHydrationLog,
    deleteHydrationLog,
    saving,
    loading,
  } = useHydration();
  const [showModal, setShowModal] = useState(false);

  const { profile } = useProfile();

  const totalWater = hydrationLogs.reduce((sum, log) => sum + log.amountMl, 0);

  const handleQuickAdd = async (amountMl) => {
    const result = await addHydrationLog({
      amountMl,
    });

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };
  const handleWaterSubmit = async (amountMl) => {
    const result = await addHydrationLog({
      amountMl,
    });

    if (result.success) {
      toast.success(result.message);
      setShowModal(false);
    } else {
      toast.error(result.message);
    }
  };
  const handleDelete = async (id) => {
    const result = await deleteHydrationLog(id);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hydration</h1>

        <button
          onClick={() => setShowModal(true)}
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
        <WaterLogModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleWaterSubmit}
          loading={loading}
        />
      </div>

      <HydrationSummary
        totalWater={totalWater}
        goalMl={(profile?.recommendedWaterIntakeL ?? 4) * 1000}
      />

      <QuickAddButtons onAdd={handleQuickAdd} loading={saving} />

      <WaterLogList logs={hydrationLogs} onDelete={handleDelete} />
    </div>
  );
}

export default Hydration;
