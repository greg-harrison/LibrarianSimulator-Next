import { IBookSearchResultData } from '../../types/book'

interface IBookReducerState {
	books: IBookSearchResultData[]
}

interface IBookReducerAction {
	type: string
	payload: any
}

export const bookReducer = (state: IBookReducerState, action: IBookReducerAction) => {
	switch (action.type) {
		case 'GET_BOOKS':
			return {
				books: [ ...state.books, action.payload ],
			}
		default:
			return state
	}
}
