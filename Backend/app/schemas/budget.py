from pydantic import BaseModel, Field


class BudgetCreate(BaseModel):
    monthly_budget: float = Field(gt=0)
    month: int = Field(ge=1, le=12)
    year: int = Field(ge=2000)


class BudgetResponse(BaseModel):
    id: int
    user_id: int
    monthly_budget: float
    month: int
    year: int

    class Config:
        from_attributes = True