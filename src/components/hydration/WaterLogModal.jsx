import { useState } from "react";

function WaterLogModal({ isOpen, onClose, onSubmit, loading }) {
  const [amount, setAmount] = useState("");
	const [showModal,setShowModal] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!amount || amount <= 0) return;

    onSubmit(Number(amount));
  };

  return (
    <div
      className="
      fixed 
      inset-0 
      bg-black/40 
      flex 
      items-center 
      justify-center
      z-50
    "
    >
      <div
        className="
        bg-white
        rounded-xl
        p-6
        w-87.5
        shadow-xl
      "
      >
        <h2
          className="
          text-xl
          font-semibold
          mb-4
        "
        >
          Log Water Intake
        </h2>

        <label className="text-sm text-gray-600">Amount (ml)</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter water amount"
          className="
            w-full
            border
            rounded-lg
            p-3
            mt-2
          "
        />

        <div
          className="
          flex
          justify-end
          gap-3
          mt-6
        "
        >
          <button
            onClick={onClose}
            className="
              px-4
              py-2
              rounded-lg
              border
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              px-4
              py-2
              rounded-lg
              bg-blue-600
              text-white
            "
          >
            {loading ? "Adding..." : "Add Water"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaterLogModal;
