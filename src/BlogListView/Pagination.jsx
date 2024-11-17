import React from 'react';
import { Box, Button } from '@mui/material';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => (
    <Box display="flex" justifyContent="center" marginTop={4}>
        {Array.from({ length: totalPages }, (_, index) => (
            <Button
                key={index + 1}
                variant={index + 1 === currentPage ? 'outlined' : 'text'}
                onClick={() => handlePageChange(index + 1)}
                style={{ margin: '0 5px' }}
            >
                {index + 1}
            </Button>
        ))}
    </Box>
);

export default Pagination;
