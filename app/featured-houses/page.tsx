import { getFeaturedProperties } from '@/lib/propertyData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Houses - Property Xchange | Premium Featured Properties',
  description: 'Discover Property Xchange\'s hand-picked selection of premium featured properties. Exclusive homes with exceptional value and unique features.',
  keywords: [
    'featured houses',
    'premium properties',
    'Property Xchange featured',
    'exclusive properties',
    'luxury homes',
    'featured real estate',
    'premium listings'
  ],
  openGraph: {
    title: 'Featured Houses - Property Xchange | Premium Featured Properties',
    description: 'Discover our hand-picked selection of premium featured properties with exceptional value.',
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        width: 1200,
        height: 630,
        alt: 'Featured Premium Properties - Property Xchange',
      },
    ],
  },
};

export default async function FeaturedHouses() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Featured Properties</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Discover our hand-picked selection of premium properties, carefully chosen for their 
            exceptional value, unique features, and prime locations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    property.type === 'rent' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    For {property.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <p className="text-gray-700 mb-4">{property.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{property.bedrooms}</p>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{property.bathrooms}</p>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{property.area}</p>
                    <p className="text-sm text-gray-600">sq ft</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-blue-600">{property.price}</p>
                  <a
                    href={`/property/${property.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}