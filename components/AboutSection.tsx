import { Award, Users, Home, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Home, number: '500+', label: 'Properties Sold' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Property Xchange?</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in the real estate industry, we've built our reputation on trust, 
              expertise, and exceptional service. Our team of dedicated professionals is committed to helping you 
              find the perfect home that matches your lifestyle and budget.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Real estate professionals"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}