import Footer from "./components/Footer"
import Header from "./components/Header"
import "./globals.css"
import { Providers } from "./providers"

export const metadata = {
  title: 'Welcome to My App',
  description: 'Experience The Best App You Have Ever Use',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>
        <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
