import type { NextPage } from 'next'
import got, { RequestError } from 'got'
import MenuAppBar from '../components/MenuAppBar'
import { BookItem } from '../components/BookItem'
import { IBookSearchResult } from '../types/book'

const Home: NextPage = (data: IBookSearchResult) => {
	const { books } = data.data.data

	const books = data.data.books

	return (
		<main>
			<MenuAppBar />
			{/* Filter */}

			{ books.map((book) => <BookItem book={book}></BookItem>)}

			{/* Display the items here */}
		</main>
	)
}

// GetServerSideProps Here
export async function getServerSideProps () {
	const requestUrl = 'http://localhost:3000/graphql'
	const query = {
		query: `query GetBooks {
      books {
        title
        description
        subtitle
      }
    }`
	}
	// use got to perform a POST to the database
	return got.post(requestUrl, {
		responseType: 'json',
		json: query
	}).then((result) => {
		const { errors } = result.body as Record<string, string>
		if (errors) {
			console.log('BookSearchService - Post failed w error: ', JSON.stringify(errors))
		}
		return { props: { data: result.body } }
	}).catch((error: RequestError) => {
		console.log('BookSearchService - Major Error w query:', error.message)
		return { props: { data: { error } } }
	})
}

export default Home
