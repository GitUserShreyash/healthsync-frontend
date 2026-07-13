function WaterLogList({ logs, onDelete }) {
  if (logs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">
          Today's Logs
        </h2>

        <p className="text-gray-500 text-center py-8">
          No water intake logged today 💧
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">
        Today's Logs
      </h2>

      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-center justify-between border-b pb-4 last:border-b-0"
          >
            <div>
              <p className="font-semibold text-gray-800">
                {log.amountMl} ml
              </p>

              <p className="text-sm text-gray-500">
                {new Date(log.loggedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <button
              onClick={() => onDelete(log.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaterLogList;