from datetime import date
from typing import Optional

from pydantic import BaseModel


class ExpenseCreate(BaseModel):
    category_id: int
    amount: float
    description: Optional[str] = None
    expense_date: date


class ExpenseUpdate(BaseModel):
    category_id: Optional[int] = None
    amount: Optional[float] = None
    description: Optional[str] = None
    expense_date: Optional[date] = None


class ExpenseResponse(BaseModel):
    id: int
    category_id: int
    amount: float
    description: Optional[str]
    expense_date: date

    class Config:
        from_attributes = True