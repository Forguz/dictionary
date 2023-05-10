import './globals.css'

import { Inter, Inconsolata, Lora } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
});

export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inconsolata',
  fallback: ['Courier New', 'Courier', 'monospace'],
  subsets: ['latin'],
});

export const lora = Lora({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lora',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ['latin'],
});


export const metadata = {
  title: 'Dictionary',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
