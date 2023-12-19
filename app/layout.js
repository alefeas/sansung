import Header from '@/components/ui/Header.js'
import Footer from '@/components/ui/Footer.js'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { CartProvider } from '@/contexts/CartContext.js'
import { AuthProvider } from '@/contexts/AuthContext.js'

export const metadata = {
  title: 'Sansung',
  description: 'Tienda online de productos tecnólogicos y electronicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
