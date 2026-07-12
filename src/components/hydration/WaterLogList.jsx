function WaterLogList({ logs }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Today's Logs
      </h2>

      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="
              flex
              justify-between
              border-b
              pb-3
            "
          >
            <span>{log.time}</span>

            <span>
              {log.amount} ml
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaterLogList;