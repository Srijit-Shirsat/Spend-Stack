from fastapi import FastAPI
from app.routes.category import router as category_router
from app.core.database import Base, engine
from app.routes.auth import router as auth_router
from app.models.user import User
from app.models.category import Category
from app.models.expense import Expense
from app.models.budget import Budget
from app.models.expense import Expense
from app.routes import expense
from app.routes import dashboard
from app.routes import budget

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router)
app.include_router(category_router)
app.include_router(expense.router)
app.include_router(dashboard.router)
app.include_router(budget.router)

@app.get("/")
def root():
    return {
        "message": "SpendStack Backend Running"
    }