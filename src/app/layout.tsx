import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { reportWebVitals } from "@/hooks/usePerformance";

// Dynamic imports for better performance
const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Empowering Youth, Building Communities",
  description: "Dhidib Foundation - Empowering youth and building communities through education, mentorship, and community development programs.",
  keywords: "youth empowerment, community building, education, mentorship, social development, Dhidib Foundation",
  authors: [{ name: "Dhidib Foundation" }],
  icons: {
    icon: [
      { url: "/logos/favicon.ico", sizes: "any" },
      { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/dhidib-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logos/favicon.ico",
  },
  openGraph: {
    title: "Empowering Youth, Building Communities",
    description: "Dhidib Foundation - Empowering youth and building communities through education, mentorship, and community development programs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/logos/favicon.ico" sizes="any" />
        <link rel="icon" href="/logos/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/logos/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/logos/favicon.ico" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
