'use client';

import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { Grid, List } from 'lucide-react';
import { Property } from '@/lib/propertyData';

interface PropertyListingProps {
  properties: Property[];
  type: 'rent' | 'sale';
}

export default function PropertyListing({ properties, type }: PropertyListingProps) {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const locations = [...new Set(properties.map(p => p.location))];

  useEffect(() => {
    let filtered = properties.filter(p => p.type === type);

    if (filters.location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.minPrice) {
      filtered = filtered.filter(p => {
        const price = parseInt(p.price.replace(/[^0-9]/g, ''));
        return !isNaN(price) && price >= parseInt(filters.minPrice);
      });
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(p => {
        const price = parseInt(p.price.replace(/[^0-9]/g, ''));
        return !isNaN(price) && price <= parseInt(filters.maxPrice);
      });
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.bathrooms) {
      filtered = filtered.filter(p => p.bathrooms >= parseInt(filters.bathrooms));
    }

    setFilteredProperties(filtered);
    setCurrentPage(1);
  }, [properties, filters, type]);

  
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };


  const resetFilters = () => {
    setFilters({
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    });
  };

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filters */}
      {/* <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Filter Properties</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>

          <select
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Bathrooms</option>
            <option value="1">1+ Bathrooms</option>
            <option value="2">2+ Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={resetFilters}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Reset Filters
          </button>
        </div>
      </div> */}

      {/* Results Summary */}
      <div className="mb-8">
        <p className="text-gray-600">
          Showing {currentProperties.length > 0 ? indexOfFirstProperty + 1 : 0}-{Math.min(indexOfLastProperty, filteredProperties.length)} of {filteredProperties.length} properties
        </p>
      </div>

      {/* Property Grid */}
      <div className={`grid gap-8 mb-12 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
