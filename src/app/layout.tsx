'use client'

import { ThemeProvider } from "@/components/themeProvider"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <html lang="en" className={cn(inter.className, "dark")}>
        <body className="antialiased">
          {children}
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
