function Expenses() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6">
        Expenses
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

        <button className="bg-teal-600 px-4 py-3 rounded-xl text-white mb-6">
          + Add Expense
        </button>

        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="text-left">Category</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Food</td>
              <td>₹350</td>
              <td>23 Jun</td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  );
}

export default Expenses;