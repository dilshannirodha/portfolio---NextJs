import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Fullstack Developer Portfolio',
  description: 'Portfolio of a fullstack developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">

        <Header />
        <main className="flex-1">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
