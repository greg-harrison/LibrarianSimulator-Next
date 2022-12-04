import { Box } from '@mui/material'
import { IBookSearchResultData } from '../types/book'

interface IProps {
    book: IBookSearchResultData
}

export const BookItem = (props: IProps) => {
    const { book } = props

    return (
        <Box>
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
        </Box>
    )
}