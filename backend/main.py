from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Book(BaseModel):
    id: int
    title: str
    author: str
    genre: str
    year: int
    ISBN: int

books: List[Book] = []



@app.get("/")
def welcome():
    return {"message": "Welcome to Go Neo Library"}

@app.get("/books/", response_model=List[Book])
def get_books():
    return books

@app.post("/books/", response_model=Book)
def create_book(book: Book):
    books.append(book)
    return book

@app.put("/books/{book_id}", response_model=Book)
def update_book(book_id: int, book: Book):
    if book_id < 0 or book_id >= len(books):
        return {"error": "Book not found"}
    books[book_id] = book
    return book

@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    if book_id < 0 or book_id >= len(books):
        return {"error": "Book not found"}
    del books[book_id]
    return {"message": "Book deleted successfully"}
