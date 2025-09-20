import { Metadata } from 'next';
import PropertyListing from '@/components/PropertyListing';
import { getRentalProperties } from '@/lib/propertyData';

export const metadata: Metadata = {
  title: 'Houses for Rent - Property Xchange | Premium Rental Properties',
  description: 'Browse Property Xchange\'s collection of premium rental properties. Find your perfect rental home with advanced search, filtering options, and expert guidance.',
  keywords: [
    'houses for rent',
    'rental properties',
    'Property Xchange rentals',
    'apartment rentals',
    'home rentals',
    'luxury rentals',
    'property rental search'
  ],
  openGraph: {
    title: 'Houses for Rent - Property Xchange | Premium Rental Properties',
    description: 'Browse our collection of premium rental properties with Property Xchange.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        width: 1200,
        height: 630,
        alt: 'Premium Rental Properties - Property Xchange',
      },
    ],
  },
};

export default async function HousesForRent() {
  const properties = await getRentalProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Houses for Rent</h1>
          <p className="text-xl text-center text-blue-100">
            Discover your perfect rental home from our premium collection
          </p>
        </div>
      </div>
      
      <PropertyListing 
        properties={properties} 
        type="rent"
      />
    </div>
  );
}