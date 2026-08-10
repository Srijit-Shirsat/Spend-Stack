import { useEffect, useState } from "react";
import { getExpenses } from "../api/expense";
import { getBudgets, createBudget, updateBudget } from "../api/budget";
import { getCategories } from "../api/category";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [showBudgetForm, setShowBudgetForm] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  useEffect(() => {
  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Failed to fetch dashboard expenses:", error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const data = await getBudgets();
      setBudgets(data);
    } catch (error) {
      console.error("Failed to fetch budgets:", error);
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch dashboard categories:", error);
    }
  };

  fetchExpenses();
  fetchBudgets();
  fetchCategories();
}, []);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const currentDate = new Date();

  const currentBudget = budgets.find(
    (budget) =>
      budget.month === currentDate.getMonth() + 1 &&
      budget.year === currentDate.getFullYear()
  );

  const monthlyBudget = currentBudget
    ? Number(currentBudget.monthly_budget)
    : 0;

  const remainingBudget = monthlyBudget - totalExpenses;

  const budgetUsed =
  monthlyBudget > 0
    ? Math.round((totalExpenses / monthlyBudget) * 100)
    : 0;

  const handleCreateBudget = async (e) => {
  e.preventDefault();

  const currentDate = new Date();

  try {
    const newBudget = await createBudget({
      monthly_budget: Number(budgetAmount),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    });

    setBudgets((prev) => [...prev, newBudget]);
    setBudgetAmount("");
    setShowBudgetForm(false);
  } catch (error) {
    console.error("Failed to create budget:", error);

    alert(
      error.response?.data?.detail ||
      "Failed to create budget."
    );
  }
};

const handleUpdateBudget = async (e) => {
  e.preventDefault();

  const currentDate = new Date();

  try {
    const updatedBudget = await updateBudget(currentBudget.id, {
      monthly_budget: Number(budgetAmount),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    });

    setBudgets((prev) =>
      prev.map((budget) =>
        budget.id === updatedBudget.id ? updatedBudget : budget
      )
    );

    setBudgetAmount("");
    setShowBudgetForm(false);
    setIsEditingBudget(false);
  } catch (error) {
    console.error("Failed to update budget:", error);

    alert(
      error.response?.data?.detail
        ? JSON.stringify(error.response.data.detail, null, 2)
        : "Failed to update budget."
    );
  }
};

  return (
    <>
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back, Srijit 👋
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Total Expenses
          </p>

          <h2 className="text-4xl font-bold text-teal-400 mt-2">
            ₹{totalExpenses}
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Monthly Budget
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            ₹{monthlyBudget}
          </h2>

          <button
             onClick={() => {
                if (currentBudget) {
                  setBudgetAmount(currentBudget.monthly_budget);
                  setIsEditingBudget(true);
                } else {
                  setBudgetAmount("");
                  setIsEditingBudget(false);
                }

                setShowBudgetForm(true);
              }}
              className="mt-4 text-teal-400 hover:text-teal-300 text-sm">
              {currentBudget ? "✎ Change Budget" : "+ Add Monthly Budget"}
          </button>
        </div>

        {showBudgetForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <form
              onSubmit={isEditingBudget ? handleUpdateBudget : handleCreateBudget}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-white mb-5">
                {isEditingBudget ? "Change Monthly Budget" : "Set Monthly Budget"}
              </h2>

              <input
                type="number"
                placeholder="Monthly budget"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                required
                min="0"
                className="w-full p-3 rounded-lg bg-zinc-800 text-white"/>

              <div className="flex gap-3 mt-5">
                <button
                  type="submit"
                  className="bg-teal-600 px-5 py-3 rounded-xl text-white"
                >
                  {isEditingBudget ? "Update Budget" : "Save Budget"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowBudgetForm(false)}
                  className="bg-zinc-700 px-5 py-3 rounded-xl text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Remaining budget
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            ₹{remainingBudget}
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl p-6">
          <p className="text-zinc-400">
            Budget used (%)
          </p>

          <h2 className="text-4xl font-bold text-orange-400 mt-2">
            {budgetUsed}%
          </h2>
        </div>

      </div>

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
            {expenses.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="py-8 text-center text-zinc-500">
                    No expenses yet.
                </td>
              </tr>
            ) : (
              [...expenses]
                .sort(
                  (a, b) =>
                    new Date(b.expense_date) -
                    new Date(a.expense_date)
                )
                .slice(0, 5)
                .map((expense) => (
                  <tr
                    key={expense.id}
                    className="border-b border-zinc-800">
                    <td className="py-4 text-white">
                      {categories.find(
                        (category) =>
                          category.id === expense.category_id
                      )?.name || "Unknown"}
                    </td>

                    <td className="py-4 text-white">
                      ₹{expense.amount}
                    </td>

                    <td className="py-4 text-zinc-400">
                      {expense.expense_date}
                    </td>

                    <td className="py-4 text-green-400">
                      Completed
                    </td>
                  </tr>
              ))
            )}
          </tbody>

        </table>

      </div>
    </>
  );
}

export default Dashboard;