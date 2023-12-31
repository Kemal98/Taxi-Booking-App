import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Providers } from './state/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taxi Booking App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
        <html lang="en">
         <body className={inter.className}>
          <NavBar/>
      <Providers>
          {children}
      </Providers>
         </body>
        </html>
    </ClerkProvider>
  )
}

