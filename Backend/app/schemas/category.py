from pydantic import BaseModel
from typing import Optional


class CategoryCreate(BaseModel):
    name: str
    color: Optional[str] = None


class CategoryUpdate(BaseModel):
    name: Optional[str] = None
    color: Optional[str] = None


class CategoryResponse(BaseModel):
    id: int
    name: str
    color: Optional[str]

    class Config:
        from_attributes = True