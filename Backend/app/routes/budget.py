from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.dependencies import get_db
from app.core.auth import get_current_user
from app.models.user import User
from app.models.budget import Budget
from app.schemas.budget import BudgetCreate, BudgetResponse


router = APIRouter(
    prefix="/budgets",
    tags=["Budgets"]
)


@router.post("/", response_model=BudgetResponse)
def create_budget(
    request: BudgetCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing_budget = db.query(Budget).filter(
        Budget.user_id == current_user.id,
        Budget.month == request.month,
        Budget.year == request.year
    ).first()

    if existing_budget:
        raise HTTPException(
            status_code=400,
            detail="Budget already exists for this month."
        )

    budget = Budget(
        user_id=current_user.id,
        monthly_budget=request.monthly_budget,
        month=request.month,
        year=request.year
    )

    db.add(budget)
    db.commit()
    db.refresh(budget)

    return budget

@router.get("/", response_model=list[BudgetResponse])
def get_budgets(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return (
        db.query(Budget)
        .filter(Budget.user_id == current_user.id)
        .order_by(Budget.year.desc(), Budget.month.desc())
        .all()
    )
    
@router.put("/{budget_id}", response_model=BudgetResponse)
def update_budget(
    budget_id: int,
    request: BudgetCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    budget = db.query(Budget).filter(
        Budget.id == budget_id,
        Budget.user_id == current_user.id
    ).first()

    if not budget:
        raise HTTPException(
            status_code=404,
            detail="Budget not found"
        )

    budget.monthly_budget = request.monthly_budget #type: ignore[reportCallIssue]
    budget.month = request.month #type: ignore[reportCallIssue]
    budget.year = request.year #type: ignore[reportCallIssue]

    db.commit()
    db.refresh(budget)

    return budget