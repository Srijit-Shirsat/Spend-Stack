function Dashboard() {
  return (
    <>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back, Srijit 👋
          </p>
        </div>

        <button className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold">
          + Add Expense
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Total Expenses
          </p>

          <h2 className="text-4xl font-bold text-teal-400 mt-2">
            ₹12,500
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Monthly Budget
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            ₹20,000
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Savings
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            ₹8,200
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Balance
          </p>

          <h2 className="text-4xl font-bold text-orange-400 mt-2">
            ₹7,500
          </h2>
        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-2 gap-6 mb-8">

        <div className="bg-zinc-900/80 border border-zinc-700 rounded-2xl p-6">

          <div className="flex justify-between mb-4">

            <h2 className="text-white font-semibold text-xl">
              Expense Trend
            </h2>

            <span className="text-zinc-500">
              Last 30 Days
            </span>

          </div>

          <div className="h-56 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
            📈 Expense Chart
          </div>

        </div>

        <div className="bg-zinc-900/80 border border-zinc-700 rounded-2xl p-6">

          <div className="flex justify-between mb-4">

            <h2 className="text-white font-semibold text-xl">
              Categories
            </h2>

            <span className="text-zinc-500">
              Monthly
            </span>

          </div>

          <div className="h-56 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
            🥧 Pie Chart
          </div>

        </div>

      </div>

      {/* Recent Expenses */}

      <div className="bg-zinc-900/80 border border-zinc-700 rounded-2xl p-6">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-semibold text-white">
            Recent Expenses
          </h2>

          <button className="text-teal-400">
            View All
          </button>

        </div>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-zinc-700">

              <th className="pb-4 text-zinc-400">
                Category
              </th>

              <th className="pb-4 text-zinc-400">
                Amount
              </th>

              <th className="pb-4 text-zinc-400">
                Date
              </th>

              <th className="pb-4 text-zinc-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-zinc-800">

              <td className="py-4 text-white">
                🍔 Food
              </td>

              <td className="py-4 text-white">
                ₹350
              </td>

              <td className="py-4 text-zinc-400">
                23 Jun
              </td>

              <td className="py-4 text-green-400">
                Completed
              </td>

            </tr>

            <tr className="border-b border-zinc-800">

              <td className="py-4 text-white">
                🚗 Travel
              </td>

              <td className="py-4 text-white">
                ₹800
              </td>

              <td className="py-4 text-zinc-400">
                22 Jun
              </td>

              <td className="py-4 text-green-400">
                Completed
              </td>

            </tr>

            <tr>

              <td className="py-4 text-white">
                🛒 Shopping
              </td>

              <td className="py-4 text-white">
                ₹1500
              </td>

              <td className="py-4 text-zinc-400">
                20 Jun
              </td>

              <td className="py-4 text-yellow-400">
                Pending
              </td>

            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Dashboard;