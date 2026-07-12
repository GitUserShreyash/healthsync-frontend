function QuickAddButtons() {
  const amounts = [250, 500, 750, 1000];

  return (
    <div className="grid grid-cols-4 gap-4">
      {amounts.map((amount) => (
        <button
          key={amount}
          className="
            bg-white
            border
            rounded-xl
            p-4
            font-semibold
            hover:bg-slate-50
          "
        >
          + {amount} ml
        </button>
      ))}
    </div>
  );
}

export default QuickAddButtons;