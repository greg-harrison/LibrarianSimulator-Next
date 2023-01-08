import { createContext, useContext, useReducer } from 'react'
import { IBookSearchResultData } from '../../types/book'
import { bookReducer } from './bookReducer'

interface IBookContext {
	state: {
		books: any[]
	},
	getBooks: (books: IBookSearchResultData[]) => void
}

export const BookContext = createContext<IBookContext>()

const initialState = {
	books: []
}

export const BookProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(bookReducer, initialState)

	const getBooks = (books: IBookSearchResultData[]) => {
		dispatch({ type: 'GET_BOOKS', payload: { books } })
	}

	return (
		<BookContext.Provider value={ { state, getBooks } }>
			{children}
		</BookContext.Provider>
	)
}

export const useBookContext = () => {
	const { state, getBooks } = useContext(BookContext)
	return { state, getBooks }
}
