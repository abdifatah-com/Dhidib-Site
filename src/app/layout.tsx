import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DHIDiB Foundation - Empowering Youth Through Skills",
  description: "DHIDiB Foundation empowers youth with skills, knowledge, and opportunities. Join our mission to create positive change through education, skill development, and innovation.",
  keywords: [
    "youth empowerment",
    "skills development", 
    "community building",
    "leadership training",
    "digital literacy",
    "volunteer opportunities",
    "youth programs",
    "Somalia",
    "Hargeisa"
  ].join(", "),
  authors: [{ name: "DHiDiB Foundation" }],
  creator: "DHiDiB Foundation",
  publisher: "DHiDiB Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dhidib.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DHIDiB Foundation - Empowering Youth Through Skills",
    description: "DHIDiB Foundation empowers youth with skills, knowledge, and opportunities. Join our mission to create positive change through education, skill development, and innovation.",
    url: 'https://dhidib.org',
    siteName: 'DHiDiB Foundation',
    images: [
      {
        url: '/dhl.jpg',
        width: 1200,
        height: 630,
        alt: 'DHiDiB Foundation - Youth Empowerment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHIDiB Foundation - Empowering Youth Through Skills',
    description: 'DHIDiB Foundation empowers youth with skills, knowledge, and opportunities.',
    images: ['/dhl.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/jpeg" href="/dhl.jpg" />
        <link rel="apple-touch-icon" href="/dhl.jpg" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DHIDiB Foundation",
              url: "https://dhidib.org",
              logo: "https://dhidib.org/dhl.jpg",
              sameAs: [
                "https://www.facebook.com/dhidib",
                "https://twitter.com/dhidib",
                "https://www.instagram.com/dhidib",
                "https://www.linkedin.com/company/dhidib"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
