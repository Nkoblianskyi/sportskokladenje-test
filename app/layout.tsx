import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sportsko Klađenje u Hrvatskoj - Stručne Recenzije | sportskokladenje.com",
  description:
    "Otkrijte najbolje stranice za sportsko klađenje u Hrvatskoj. Stručne analize, ekskluzivni bonusi i pouzdane ocjene za nogomet, tenis, košarku i druge sportove.",
  keywords: [
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "kvote klađenje",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "usporedba kladionica",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "top kladionice Hrvatska",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
  ],
  authors: [{ name: "Sportsko Klađenje" }],
  openGraph: {
    title: "Sportsko Klađenje u Hrvatskoj - Stručne Recenzije | sportskokladenje.com",
    description:
      "Stručne analize najboljih stranica za sportsko klađenje u Hrvatskoj. Ekskluzivni bonusi i pouzdane ocjene.",
    url: "https://sportskokladenje.com",
    siteName: "Sportsko Klađenje",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
