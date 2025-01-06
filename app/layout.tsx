import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { NavigationBar } from "@/components/navigation-bar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"]
})



export const metadata: Metadata = {
  title: "Swapnanil Majumdar",
  description: "swapnanil majumdar portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
         className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
        >
         {children}
        </body>
        <NavigationBar/>
      </ThemeProvider>
    </html>
  );
}
