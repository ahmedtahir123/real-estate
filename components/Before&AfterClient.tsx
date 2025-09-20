'use client';

import { useState } from 'react';

export default function BeforeAfterClient({property}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({});
  
  const toggleBeforeAfter = (index: number) => {
    setShowAfter(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Before & After Transformations</h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Witness the incredible transformations of our renovation projects. See how we turn ordinary 
            properties into extraordinary homes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {property.map((property, index) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={showAfter[index] ? property.afterImage : property.beforeImage}
                  alt={`${property.title} - ${showAfter[index] ? 'After' : 'Before'}`}
                  className="w-full h-80 object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    showAfter[index] ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {showAfter[index] ? 'After' : 'Before'}
                  </span>
                </div>
                <button
                  onClick={() => toggleBeforeAfter(index)}
                  className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Show {showAfter[index] ? 'Before' : 'After'}
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <p className="text-gray-700 mb-4">{property.renovationDescription}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><span className="font-semibold">Project Duration:</span> {property.projectDuration}</p>
                    <p><span className="font-semibold">Investment:</span> {property.renovationCost}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Year:</span> {property.renovationYear}</p>
                    <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">{property.status}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}