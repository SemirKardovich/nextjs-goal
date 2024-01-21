import '@styles/global.css'
import Navbar from '@components/Navbar'
import Head from 'next/head'

export const metadata = {
  title: 'Goal',
  description: 'NextJS 13 goal',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='main'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
