function QuickAddButtons({ onAdd, loading }) {
  const amounts = [250, 500, 750, 1000];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Quick Add
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onAdd(amount)}
            disabled={loading}
            className="
              bg-white
              border
              rounded-xl
              p-4
              font-semibold
              hover:bg-emerald-50
              hover:border-emerald-500
              transition
              disabled:opacity-60
            "
          >
            + {amount} ml
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickAddButtons;