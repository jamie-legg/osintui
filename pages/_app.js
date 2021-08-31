import 'tailwindcss/tailwind.css'
import '../global.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
