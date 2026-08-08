from pydantic import BaseModel


class CategorySummary(BaseModel):
    category: str
    total: float


class DashboardResponse(BaseModel):
    total_expenses: float
    total_transactions: int
    category_breakdown: list[CategorySummary]