import { NextApiRequest } from 'next'

export const stringFromParameter = (req: NextApiRequest, key: string):string|undefined => {
	const item = req.query[key]
	if (Array.isArray(item)) { return item[0] }
	return item
}