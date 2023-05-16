import { Inter, Inconsolata, Lora } from 'next/font/google'
import { Suspense } from 'react'

import { Loading } from '@/components/common/atoms/Loading'
import { HomeHeader } from '@/components/common/organisms/HomeHeader'
import { ThemeProvider } from '@/context/theme.context'
import '@/styles/globals.css'

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
  style: ['normal'],
})

export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inconsolata',
  fallback: ['Courier New', 'Courier', 'monospace'],
  subsets: ['latin'],
})

export const lora = Lora({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lora',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Dictionary',
  description: 'Frontend mentor project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`}
      lang="en"
    >
      <body>
        <ThemeProvider>
          <Suspense fallback={<Loading />}>
            <HomeHeader />
          </Suspense>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
