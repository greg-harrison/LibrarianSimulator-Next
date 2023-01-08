import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BookProvider } from '../contexts/bookContext/bookProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<BookProvider>
			<Component { ...pageProps } />
		</BookProvider>
	)
}

export default MyApp
