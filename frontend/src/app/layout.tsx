import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Fatahi Project",
  description: "Industrial company website built with Next.js",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen bg-[#f7f6f6]">
        <Header />
        <main className="flex-1 container mx-auto p-4 ">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
