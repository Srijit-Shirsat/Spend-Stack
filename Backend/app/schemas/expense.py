from datetime import date
from typing import Optional

from pydantic import BaseModel


class ExpenseCreate(BaseModel):
    category_id: int
    title: str
    amount: float
    notes: Optional[str] = None
    expense_date: date


class ExpenseUpdate(BaseModel):
    category_id: Optional[int] = None
    title: Optional[str] = None
    amount: Optional[float] = None
    notes: Optional[str] = None
    expense_date: Optional[date] = None


class ExpenseResponse(BaseModel):
    id: int
    category_id: int
    title: str
    amount: float
    notes: Optional[str]
    expense_date: date

    class Config:
        from_attributes = True