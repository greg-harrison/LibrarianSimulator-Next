import type { NextApiRequest, NextApiResponse } from 'next'
import { BookService } from '../../services/BookSearchService'
import { IBookSearchResult } from '../../types/book'


export default async ( req: NextApiRequest, res: NextApiResponse<JSON> ): Promise<void> => {
  console.log('GET api/getBooks/')

  const { data } = await BookService.query() as IBookSearchResult

  const jsonString = JSON.stringify({
		books: data,
	})
	res.status(200).send( JSON.parse(jsonString) as JSON)
}
