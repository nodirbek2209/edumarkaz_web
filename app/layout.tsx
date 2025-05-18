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
    title: 'Edumarkaz',
    description: 'Your app description',
    generator: 'v0.dev',
    icons: {
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'android-chrome',
                url: '/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome',
                url: '/android-chrome-512x512.png',
            },
        ],
    },
};
