import type { Metadata } from 'next'
import { Oswald, Lato, Coiny } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const oswaldSans = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
})

const latoSans = Lato({
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})

const coinySans = Coiny({
  variable: '--font-coiny',
  weight: ['400'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Food Saver PH',
  description: 'FoodSaver helps reduce food waste by connecting users with surplus meals from local restaurants, cafés, and grocery stores at discounted prices. Discover delicious, affordable food while supporting a sustainable future—one meal at a time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${oswaldSans.variable} ${latoSans.variable} ${coinySans.variable} antialiased`}>{children}</body>
      <Analytics/>
    </html>
  )
}
