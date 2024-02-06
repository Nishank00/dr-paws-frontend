
import { Inter } from 'next/font/google'
import './globals.css'
import App from './App'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Paws',
  description: 'Dashoard for Dr. Paws',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  )
}
