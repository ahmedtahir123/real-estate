import { Metadata } from 'next';
import PropertyListing from '@/components/PropertyListing';
import { getSaleProperties } from '@/lib/propertyData';

export const metadata: Metadata = {
  title: 'Houses for Sale - Property Xchange | Premium Properties for Sale',
  description: 'Explore premium properties for sale with Property Xchange. Find your dream home with comprehensive listings, expert guidance, and personalized service.',
  keywords: [
    'houses for sale',
    'properties for sale',
    'Property Xchange sales',
    'home buying',
    'real estate sales',
    'luxury homes for sale',
    'property purchase'
  ],
  openGraph: {
    title: 'Houses for Sale - Property Xchange | Premium Properties for Sale',
    description: 'Explore premium properties for sale with comprehensive listings and expert guidance.',
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        width: 1200,
        height: 630,
        alt: 'Premium Properties for Sale - Property Xchange',
      },
    ],
  },
};

export default async function HousesForSale() {
  const properties = await getSaleProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Houses for Sale</h1>
          <p className="text-xl text-center text-blue-100">
            Find your dream home from our exclusive property listings
          </p>
        </div>
      </div>
      
      <PropertyListing 
        properties={properties} 
        type="sale"
      />
    </div>
  );
}