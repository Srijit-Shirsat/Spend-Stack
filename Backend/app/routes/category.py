from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.auth import get_current_user
from app.schemas.category import CategoryUpdate
from app.models.user import User
from app.models.category import Category

from app.schemas.category import (
    CategoryCreate,
    CategoryResponse
)

router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)

@router.post(
    "/",
    response_model=CategoryResponse
)
def create_category(
    request: CategoryCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    existing_category = db.query(Category).filter(
        Category.user_id == current_user.id,
        Category.name == request.name
    ).first()

    if existing_category:
        raise HTTPException(
            status_code=400,
            detail="Category already exists."
        )

    category = Category(
        name=request.name,
        color=request.color,
        user_id=current_user.id
    )

    db.add(category)
    db.commit()
    db.refresh(category)

    return category

from typing import List

@router.get(
    "/",
    response_model=List[CategoryResponse]
)
def get_categories(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    categories = db.query(Category).filter(
        Category.user_id == current_user.id
    ).all()

    return categories

@router.get(
    "/{category_id}",
    response_model=CategoryResponse
)
def get_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    category = db.query(Category).filter(
        Category.id == category_id,
        Category.user_id == current_user.id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    return category

@router.put(
    "/{category_id}",
    response_model=CategoryResponse
)
def update_category(
    category_id: int,
    request: CategoryUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    category = db.query(Category).filter(
        Category.id == category_id,
        Category.user_id == current_user.id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    if request.name is not None:
        category.name = request.name #type: ignore[reportCallIssue]

    if request.color is not None:
        category.color = request.color #type: ignore[reportCallIssue]

    db.commit()
    db.refresh(category)

    return category

@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    category = db.query(Category).filter(
        Category.id == category_id,
        Category.user_id == current_user.id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    db.delete(category)
    db.commit()

    return {
        "message": "Category deleted successfully"
    }