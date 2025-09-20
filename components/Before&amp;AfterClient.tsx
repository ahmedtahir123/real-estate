'use client';

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function BeforeAfterClient({ property }) {
  const [showAfter, setShowAfter] = useState<{ [key: string]: boolean }>({});

  const toggleBeforeAfter = (id: string) => {
    setShowAfter((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Before & After Transformations
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Witness the incredible transformations of our renovation projects. See
            how we turn ordinary properties into extraordinary homes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {property.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {(showAfter[p.id] ? p.afterImages : p.beforeImages).map(
                      (img, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={img}
                            alt={`${p.title} - ${
                              showAfter[p.id] ? 'After' : 'Before'
                            } ${i + 1}`}
                            className="w-full h-80 object-cover"
                          />
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      showAfter[p.id] ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {showAfter[p.id] ? 'After' : 'Before'}
                  </span>
                </div>
                <button
                  onClick={() => toggleBeforeAfter(p.id)}
                  className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Show {showAfter[p.id] ? 'Before' : 'After'}
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-4">{p.location}</p>
                <p className="text-gray-700 mb-4">
                  {p.renovationDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p>
                      <span className="font-semibold">Project Duration:</span>{' '}
                      {p.projectDuration}
                    </p>
                    <p>
                      <span className="font-semibold">Investment:</span>{' '}
                      {p.renovationCost}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Year:</span> {p.renovationYear}
                    </p>
                    <p>
                      <span className="font-semibold">Status:</span>{' '}
                      <span className="text-green-600 font-semibold">
                        {p.status}
                      </span>
                    </p>
