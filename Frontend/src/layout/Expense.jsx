import { useEffect, useState } from "react";
import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from "../api/expense";
import { getCategories, createCategory } from "../api/category";


function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("#282828");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editExpenseDate, setEditExpenseDate] = useState("");
  useEffect(() => {
  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      console.log("Expenses:", data);
      setExpenses(data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      console.log("Categories:", data);
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  fetchExpenses();
  fetchCategories();
}, []);

const handleCreateExpense = async (e) => {
  e.preventDefault();

  try {
    const newExpense = await createExpense({
      category_id: Number(categoryId),
      title,
      amount: Number(amount),
      notes,
      expense_date: expenseDate,
    });

    console.log("Expense created:", newExpense);
    setExpenses((prev) => [...prev, newExpense]);

    setCategoryId("");
    setTitle("");
    setAmount("");
    setNotes("");
    setExpenseDate("");

    setShowForm(false);
  } catch (error) {
    console.error("Failed to create expense:", error);
  }
};

const handleCreateCategory = async () => {

  try {
    const newCategory = await createCategory({
      name: categoryName,
      color: categoryColor,
    });

    setCategories((prev) => [...prev, newCategory]);

    setCategoryId(newCategory.id);
    setCategoryName("");
    setCategoryColor("#14b8a6");
    setShowCategoryForm(false);

    console.log("Category created:", newCategory);
  } catch (error) {
    console.error("Failed to create category:", error);
  }
};

const filteredExpenses =
  selectedCategory === "all"
    ? expenses
    : expenses.filter(
        (expense) => expense.category_id === Number(selectedCategory)
      );

const handleUpdateExpense = async (e) => {
  e.preventDefault();

  try {
    const updatedExpense = await updateExpense(
      editingExpense.id,
      {
        category_id: Number(editCategoryId),
        title: editTitle,
        amount: Number(editAmount),
        notes: editNotes,
        expense_date: editExpenseDate,
      }
    );

    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );

    setEditingExpense(null);

  } catch (error) {
    console.error("Failed to update expense:", error);
  }
};

  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6">
        Expenses
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

        <button 
        onClick={() => setShowForm(true)}
        className="bg-teal-600 px-4 py-3 rounded-xl text-white mb-6">
          + Add Expense
        </button>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              selectedCategory === "all"
              ? "bg-teal-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              selectedCategory === category.id
              ? "bg-teal-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
            >
              {category.name}
            </button>
          ))}
        </div>

              {showForm && (
        <form
          onSubmit={handleCreateExpense}
          className="mb-6 space-y-4 bg-zinc-800 rounded-xl p-5"
        >
        <div className="flex gap-3">
          <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="flex-1 p-3 rounded-lg bg-zinc-900 text-white"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setShowCategoryForm(true)}
            className="bg-zinc-700 px-4 rounded-xl text-white"> + Category
          </button>
        </div>

        {showCategoryForm && (
          <div
            className="space-y-4 bg-zinc-900 rounded-xl p-4"
          >
            <input
              type="text"
              placeholder="Category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-zinc-800 text-white"
            />

            <input
              type="color"
              value={categoryColor}
              onChange={(e) => setCategoryColor(e.target.value)}
              className="w-full h-12 bg-zinc-800 rounded-lg"
            />

            <button
              type="button"
              onClick={handleCreateCategory}
              className="bg-teal-600 px-4 py-3 rounded-xl text-white"
            >
              Create Category
            </button>
          </div>
        )}

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-zinc-900 text-white"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-zinc-900 text-white"
          />

          <input
            type="text"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 text-white"
          />

          <input
            type="date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-zinc-900 text-white"
          />

          <button
            type="submit"
            className="bg-teal-600 px-4 py-3 rounded-xl text-white"
          >
            Save Expense
          </button>
        </form>
      )}

        {editingExpense && (
          <form
            onSubmit={handleUpdateExpense}
            className="mb-6 space-y-4 bg-zinc-800 rounded-xl p-5">
            <select
              value={editCategoryId}
              onChange={(e) => setEditCategoryId(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 text-white"
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 text-white"
            />

            <input
              type="number"
              placeholder="Amount"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 text-white"
            />

            <input
              type="text"
              placeholder="Notes"
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              className="w-full p-3 rounded-lg bg-zinc-900 text-white"
            />

            <input
              type="date"
              value={editExpenseDate}
              onChange={(e) => setEditExpenseDate(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 text-white"
            />

            <div className="flex gap-3">

              <button
                type="submit"
                className="bg-teal-600 px-4 py-3 rounded-xl text-white"
              >
                Update Expense
              </button>

              <button
                type="button"
                onClick={() => setEditingExpense(null)}
                className="bg-zinc-700 px-4 py-3 rounded-xl text-white"
              >
                Cancel
              </button>

            </div>
          </form>
        )}

        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="pb-4 text-zinc-400 text-left">Category</th>
              <th className="pb-4 text-zinc-400 text-left">Title</th>
              <th className="pb-4 text-zinc-400 text-left">Amount</th>
              <th className="pb-4 text-zinc-400 text-left">Date</th>
              <th className="pb-4 text-zinc-400 text-left">Notes</th>
              <th className="pb-4 text-zinc-400 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="py-12 text-center text-zinc-500">
                  {selectedCategory === "all"
                    ? "No expenses yet. Add your first expense."
                    : "No expenses in this category yet."}
                </td>
              </tr>
          ) : (
            filteredExpenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b border-zinc-800"
              >
                <td className="py-4 text-white">
                  {categories.find(
                  (category) => category.id === expense.category_id)?.name || "Unknown"}
                </td>

                <td className="py-4 text-white">
                  {expense.title}
                </td>

                <td className="py-4 text-white">
                  ₹{expense.amount}
                </td>

                <td className="py-4 text-zinc-400">
                  {expense.expense_date}
                </td>

                <td className="py-4 text-zinc-400">
                  {expense.notes || "—"}
                </td>

                <td className="py-4">
                  <div className="flex gap-3">
                    <button 
                    onClick={() => {
                      setEditingExpense(expense);
                      setEditCategoryId(String(expense.category_id));
                      setEditTitle(expense.title);
                      setEditAmount(String(expense.amount));
                      setEditNotes(expense.notes || "");
                      setEditExpenseDate(expense.expense_date);
                    }}
                    className="text-teal-400 hover:text-teal-300">
                      Edit
                    </button>
        
                    <button 
                    onClick={async () => {
                      try {
                         await deleteExpense(expense.id);
                         setExpenses((prev) => prev.filter((item) => item.id !== expense.id));
                      } catch (error) {
                        console.error("Failed to delete expense:", error);
                      }
                    }}
                    className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </div>
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

export default Expenses;