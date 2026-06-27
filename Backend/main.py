from fastapi import FastAPI

from app.core.database import Base, engine

from app.models.user import User
from app.models.category import Category
from app.models.expense import Expense
from app.models.budget import Budget

Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "SpendStack Backend Running"
    }