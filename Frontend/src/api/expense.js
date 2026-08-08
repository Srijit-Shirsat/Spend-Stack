import api from "./axios";

export const getExpenses = async () => {
  const response = await api.get("/expenses");
  return response.data;
};