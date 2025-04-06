interface Book {
    title: string;
    author?: string;
    coverImage?: string;
    description?: string;
    rating?: number;
    genre: string;
    year: number;
    ISBN: string;

}

export const books: Book[] = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        ISBN: "978-0747532699"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        ISBN: "978-0618968633"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        ISBN: "978-0451524935"
    },
];