from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.auth import get_current_user
from app.models.user import User
from app.models.expense import Expense
from app.schemas.expense import ExpenseCreate, ExpenseUpdate, ExpenseResponse

router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"]
)

@router.post("/", response_model=ExpenseResponse)
def create_expense(
    request: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    expense = Expense(
        user_id=current_user.id,
        category_id=request.category_id,
        amount=request.amount,
        description=request.description,
        expense_date=request.expense_date
    )

    db.add(expense)
    db.commit()
    db.refresh(expense)

    return expense

@router.get("/", response_model=list[ExpenseResponse])
def get_expenses(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return (
        db.query(Expense)
        .filter(Expense.user_id == current_user.id)
        .all()
    )
    
