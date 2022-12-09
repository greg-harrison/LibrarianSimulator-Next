export interface IBookSearchResultData {
	id: string
	isbn10: string
	title: string
	subtitle: string
	authors: string
	categories: string
	thumbnail: string
	description: string
	published_year: number
	average_rating: number
	num_pages: number
	ratings_count: number
}

export interface IBookSearchResult {
	data: IBookSearchResult
	queryComplexity: number
	queryComplexityDetails: {
		[key: string]: number
	}
	errors?: Record<string, string>
}
