
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { ReactQueryProvider } from './ReactQueryProvider';


export const metadata: Metadata = {
  title: 'Artpix',
  description: 'Generate random anime images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body >
        <ReactQueryProvider>
          <Navbar />
          <Sidebar>
            {children}
          </Sidebar>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
