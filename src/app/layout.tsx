import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationProvider } from "@/contexts/NavigationContext"
import { ArrowLoader } from "@/components/arrow-loader"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YourName - Professional Web Developer",
    template: "%s | YourName"
  },
  description: "I build fast, professional websites for businesses ready to grow. Specializing in modern web development with Next.js, React, and Tailwind CSS.",
  keywords: ["web developer", "freelance", "Next.js", "React", "business websites", "landing pages", "ecommerce"],
  authors: [{ name: "YourName" }],
  creator: "YourName",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "YourName - Professional Web Developer",
    description: "I build fast, professional websites for businesses ready to grow.",
    siteName: "YourName Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourName - Professional Web Developer",
    description: "I build fast, professional websites for businesses ready to grow.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NavigationProvider>
            {children}
            <ArrowLoader />
            <Toaster />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
