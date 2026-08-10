import api from "./axios";

export const getExpenses = async () => {
  const response = await api.get("/expenses/");
  return response.data;
};

export const createExpense = async (expenseData) => {
  const response = await api.post("/expenses/", expenseData);
  return response.data;
};

export const updateExpense = async (expenseId, expenseData) => {
  const response = await api.put(`/expenses/${expenseId}`, expenseData);
  return response.data;
};

export const deleteExpense = async (expenseId) => {
  const response = await api.delete(`/expenses/${expenseId}`);
  return response.data;
};