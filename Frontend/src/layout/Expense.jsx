import { useEffect, useState } from "react";
import { getExpenses, createExpense } from "../api/expense";
import { getCategories, createCategory } from "../api/category";


function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("#14b8a6");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  useEffect(() => {
  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      console.log("Expenses:", data);
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