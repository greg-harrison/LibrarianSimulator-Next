import { useEffect, useState } from 'react'
import MenuAppBar from '../components/MenuAppBar'
import { BookItem } from '../components/BookItem'
import { IBookSearchResultData } from '../types/book'

const Home = (): JSX.Element => {
	const [ books, setBooks ] = useState([])

	useEffect( () => {
		const fetchData = async () => {
			const response = await fetch('/api/getBooks?filters=""')
			const { books } = await response.json() as IBookSearchResultData[]
			setBooks(books.books)
		}
		void fetchData()
	}, [])

	return (
		<main>
			<MenuAppBar />
			{/* Filter */}

			{ books.length > 0 && books.map((book) => <BookItem book={ book } />)}
		</main>
	)
}

export default Home
