import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import { StickyHeader } from "@/components/sticky-header"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`scroll-smooth ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <LanguageProvider>
                <StickyHeader />
                {children}
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}


export const metadata = {
      generator: 'v0.dev'
    };
