import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Property Xchange - Your Trusted Real Estate Partner',
  description: 'Learn about Property Xchange, our mission, vision, and expert team dedicated to helping you find your dream home. 15+ years of real estate excellence.',
  keywords: [
    'Property Xchange about',
    'real estate company',
    'real estate team',
    'property experts',
    'real estate mission',
    'trusted real estate agent'
  ],
  openGraph: {
    title: 'About Property Xchange - Your Trusted Real Estate Partner',
    description: 'Learn about Property Xchange and our expert team dedicated to helping you find your dream home.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        width: 1200,
        height: 630,
        alt: 'Property Xchange Team - Real Estate Professionals',
      },
    ],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">About Property Xchange</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect home for over 15 years
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2008, Property Xchange has been at the forefront of connecting families 
              with their dream homes. We understand that buying or renting a property is one of life's 
              most significant decisions, and we're here to make that journey seamless and rewarding.
            </p>
            <p className="text-lg text-gray-600">
              With over 1,000 successful transactions and countless satisfied clients, we've built our 
              reputation on trust, expertise, and exceptional service. Our team of dedicated professionals 
              brings decades of combined experience in the real estate market.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg"
              alt="Modern real estate office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional real estate services that exceed client expectations while building 
              lasting relationships based on trust, integrity, and professionalism. We strive to make 
              every property transaction smooth, transparent, and successful.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading real estate agency in the region, recognized for our innovative approach, 
              market expertise, and unwavering commitment to client satisfaction. We envision a future 
              where finding your perfect home is an exciting and stress-free experience.
            </p>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today and let us help you navigate the real estate market with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-blue-100">info@propertyxchange.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Address</h4>
              <p className="text-blue-100">123 Main Street<br />Downtown, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}