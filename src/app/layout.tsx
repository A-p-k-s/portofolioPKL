import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: "Angel's profile",
  description: "Personal profile website for Angel",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="img/x-icon" href="/enjel.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}