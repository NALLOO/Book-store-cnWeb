import { Box } from '@mui/material';
import React from 'react'

function Book(props) {
    const {book} = props;
  return (
    <div className='book-container'>
        <Box >
            <img src={book.img} ></img>
        </Box>
    </div>
  )
}

Book.propTypes = {}

export default Book
