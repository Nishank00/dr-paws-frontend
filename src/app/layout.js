import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Paws',
  description: 'Dashoard for Dr. Paws',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='bg-white'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
