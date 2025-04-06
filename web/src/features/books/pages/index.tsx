import { Box, Typography } from "@mui/material"
import { useQuery } from "react-query";
import { fetchBooks } from "../api";
import BookCard from "../components/BookCard";

import type {Book} from "../../../types/books"

const BooksPage = () => {
  const { isLoading, error, data } = useQuery<Book[], Error>('books', fetchBooks);
  console.log(data)

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom>Books</Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 3,
        mt: 2
      }}>
        {isLoading && <p>Loading...</p>}
        
        {error && <p>An error has occurred: {error.message}</p>}
        
        {data && (
        <ul>
          {data.map((book: Book) => (
            <BookCard book={book} />
          ))}
        </ul>
        )}

      </Box>
    </Box>
  )
}

export default BooksPage
