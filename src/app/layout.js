
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import App from './App'
// import localFont from 'next/font/local'
// import { initializeFonts } from '@next/font'

// initializeFonts()
// const myFont = localFont({
//   src: './my-font.woff2',
//   display: 'swap',
// })

const inter = Inter({ subsets: ['latin'] });
const open = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
})

export const metadata = {
  title: 'Dr. Paws',
  description: 'Dashoard for Dr. Paws',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + open.variable}>
        <App>{children}</App>
      </body>
    </html>
  )
}
