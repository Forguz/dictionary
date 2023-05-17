import { Suspense } from 'react'

import { Loading } from '@/components/common/atoms/Loading'
import { HomeHeader } from '@/components/common/organisms/HomeHeader'
import { ThemeProvider } from '@/context/theme.context'
import { inter, inconsolata, lora } from './fonts'
import '@/styles/globals.css'

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
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
