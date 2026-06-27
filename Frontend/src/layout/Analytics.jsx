function Analytics() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6">
        Analytics
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-2xl h-72 border border-zinc-800 flex items-center justify-center text-zinc-500">
          Expense Trend Chart
        </div>

        <div className="bg-zinc-900 rounded-2xl h-72 border border-zinc-800 flex items-center justify-center text-zinc-500">
          Category Pie Chart
        </div>

      </div>
    </>
  );
}

export default Analytics;