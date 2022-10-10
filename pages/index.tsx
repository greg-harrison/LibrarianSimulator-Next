import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import MenuAppBar from '../components/MenuAppBar'

const Home: NextPage = () => {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ books, setBooks ] = useState<Array<any>>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getBooks')
      if (response.status !== 200) {
        setIsLoading(false)
        return
      }
      const responseData = await response.json()
      setBooks(responseData.books)
      setIsLoading(false)
    }

    console.log(books)

    setIsLoading(true)
    void fetchData()
  }, [])

  return (
    <main>
      < MenuAppBar />
      {/* Filter */}

      { !isLoading && 
        <>
          { books.books.map((book) => {
            return (
              <>
                {book.title}
              </>
            ) 
          })}
        </> }
      {/* Display the items here */}
    </main>
  )
}

// GetServerSideProps Here

export default Home
