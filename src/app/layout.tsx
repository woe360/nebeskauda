import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "../components/Navigation"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Odontologijos Klinika | Profesionalus Dantų Gydymas",
  description: "Moderna odontologijos klinika, teikianti aukštos kokybės dantų gydymo paslaugas. Patyrę specialistai, šiuolaikiškas įranga ir individuali pacientų priežiūra.",
  keywords: "odontologija, dantų gydymas, dantų protezavimas, implantai, higiena, estetinė odontologija",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt" className={inter.className}>
      <body className="antialiased overflow-x-hidden">
        <Navigation />
        <main className="pt-16 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
