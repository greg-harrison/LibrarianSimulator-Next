import { Card } from '@mui/material'
import { IBookSearchResultData } from '../types/book'

interface IBookListItemProps {
	book: IBookSearchResultData
}

const BookListItem = ( props: IBookListItemProps ) => {
	const { book } = props

	return (
		<Card>
			{ book.title }
		</Card>
	)
}

export default BookListItem
