import { Inter } from 'next/font/google'
import './globals.css'
import  Navbar from '../components/Navbar'
import { Providers } from '@/providers'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  author: 'Mauricio Espinoza',
  title: 'Portafolio Mauricio Espinoza',
  description: 'Portafolio Mauricio Espinoza',
}

export default function RootLayout({ children }) {
  return (
    <>
    <head>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </head>
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
    </>
  )
}
