import got, { RequestError } from 'got'

class BookSearchService {
    async query (): Promise<unknown>  {
        const requestUrl = `http://localhost:3000/graphql`
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
            return result.body
        }).catch((error: RequestError) => {
            console.log('BookSearchService - Major Error w query:', error.message)
            return { data: { error } }
        }) 
    }
}

const bookService = new BookSearchService()
export {
    bookService as BookService
}