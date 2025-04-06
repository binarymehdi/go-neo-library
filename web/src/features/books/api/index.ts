import type { Book } from "../../../types/books";

export const fetchBooks = async (): Promise<Book[]> => {
  const res = await fetch("https://localhost:8000");
  return res.json() as Promise<Book[]>;
};

export const editBook = async (book: Partial<Book>): Promise<Book> => {
  const res = await fetch("https://localhost:8000/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return res.json() as Promise<Book>;
};

export const deleteBook = async (id: number): Promise<{ success: boolean }> => {
  const res = await fetch(`https://localhost:8000/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json() as Promise<{ success: boolean }>;
};
