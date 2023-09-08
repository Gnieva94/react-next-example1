import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

import Header from './components/Header'
import Redes from './components/Redes'
import Footer from './components/Footer'

export const metadata = {
  title: 'Mis Links',
  description: 'Mis Links - generados con Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <Redes />
        {children}
        <Footer />
        </body>
    </html>
  )
}
