import type { NextPage } from 'next'
import MenuAppBar from '../components/MenuAppBar'

const Home: NextPage = () => {
  return (
    <main>
      < MenuAppBar />
      {/* Filter */}
      {/* Display the items here */}
    </main>
  )
}

// GetServerSideProps Here

export default Home
