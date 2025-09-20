import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { warmupCache } from '@/lib/warmup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Property Xchange - Find Your Dream Home | Premium Real Estate',
    template: '%s | Property Xchange'
  },
  description: 'Property Xchange - Your trusted real estate partner. Discover premium properties for rent and sale with expert guidance. Browse featured homes, luxury rentals, and exclusive property listings.',
  keywords: [
    'Property Xchange',
    'real estate',
    'homes for sale',
    'homes for rent',
    'property listings',
    'house rentals',
    'luxury properties',
    'real estate agent',
    'property management',
    'dream home',
    'premium real estate',
    'property search',
    'real estate services'
  ],
  authors: [{ name: 'Property Xchange Team' }],
  creator: 'Property Xchange',
  publisher: 'Property Xchange',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertyxchange.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Property Xchange - Find Your Dream Home | Premium Real Estate',
    description: 'Discover premium properties for rent and sale with Property Xchange. Expert real estate services, featured homes, and luxury property listings.',
    url: 'https://propertyxchange.com',
    siteName: 'Property Xchange',
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        width: 1200,
        height: 630,
        alt: 'Property Xchange - Premium Real Estate Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Xchange - Find Your Dream Home',
    description: 'Discover premium properties for rent and sale with expert real estate services.',
    images: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'],
    creator: '@PropertyXchange',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // warmup cache on server load
  await warmupCache();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Property Xchange",
              "description": "Premium real estate services specializing in residential properties for rent and sale",
              "url": "https://propertyxchange.com",
              "logo": "https://propertyxchange.com/logo.png",
              "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
              "telephone": "+92-3341241699",
              "email": "info@propertyxchange.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13d2 Gulshan e Iqbal",
                "addressLocality": "Karachi",
                "addressRegion": "SD",
                "postalCode": "75300",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.9200",
                "longitude": "67.1263"
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "24.9200",
                  "longitude": "67.1263"
                },
                "geoRadius": "50000"
              },
              "areaServed": ["Karachi", "Lahore", "Islamabad"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Real Estate Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Rental Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Sales Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Management"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
