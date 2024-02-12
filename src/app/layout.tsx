import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Providers from '@/Providers/Provider'
import ThemeSwitcher from '@/Components/ThemeSwitcher'

export const metadata: Metadata = {
  title: 'BetterVoxel',
  description: 'BetterVoxel. The voxel engine for the future.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
