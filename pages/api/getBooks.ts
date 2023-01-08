import type { NextApiRequest, NextApiResponse } from 'next'
import { BookService } from '../../services/bookSearchService'
import { IBookSearchResult } from '../../types/book'


export default async ( req: NextApiRequest, res: NextApiResponse<JSON> ): Promise<void> => {
	const filters = JSON.parse(req.query.filters as string) as unknown
	const { data } = await BookService.query(filters) as IBookSearchResult

	const jsonString = JSON.stringify({
		books: data,
	})
	res.status(200).send( JSON.parse(jsonString) as JSON)
}
