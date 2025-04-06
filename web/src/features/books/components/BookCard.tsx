import { Card, CardContent, Typography, Box, Chip, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { Book } from '../../../types/books';

const StyledCard = styled(Card)(({  }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

}));

const BookCard = ({ book }: { book: Book }) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" noWrap>
                    {book.title}
                </Typography>
                
                {book.author && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        by {book.author}
                    </Typography>
                )}
                
                {book.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }} 
                                            noWrap title={book.description}>
                        {book.description}
                    </Typography>
                )}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    {book.rating !== undefined && (
                        <Rating value={book.rating} readOnly size="small" precision={0.5} />
                    )}
                    
                    {book.genre && (
                        <Chip label={book.genre} size="small" />
                    )}
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default BookCard;
