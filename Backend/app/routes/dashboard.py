from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.core.dependencies import get_db
from app.core.auth import get_current_user

from app.models.user import User
from app.models.expense import Expense
from app.models.category import Category

from app.schemas.dashboard import (
    DashboardResponse,
    CategorySummary,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/", response_model=DashboardResponse)
def get_dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    total_expenses = (
        db.query(func.sum(Expense.amount))
        .filter(Expense.user_id == current_user.id)
        .scalar()
        or 0
    )

    total_transactions = (
        db.query(Expense)
        .filter(Expense.user_id == current_user.id)
        .count()
    )

    category_data = (
        db.query(
            Category.name,
            func.sum(Expense.amount)
        )
        .join(
            Expense,
            Expense.category_id == Category.id
        )
        .filter(
            Expense.user_id == current_user.id
        )
        .group_by(Category.name)
        .all()
    )

    category_breakdown = [
        CategorySummary(
            category=name,
            total=total
        )
        for name, total in category_data
    ]

    return DashboardResponse(
        total_expenses=total_expenses,
        total_transactions=total_transactions,
        category_breakdown=category_breakdown
    )