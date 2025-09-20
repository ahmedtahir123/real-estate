export default function Hero() {
  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="Luxury home exterior"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Find Your Perfect
            <span className="block text-yellow-400">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover premium properties for rent and sale with our expert real estate services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/houses-for-rent"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Browse Rentals
            </a>
            <a
              href="/houses-for-sale"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View Properties for Sale
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}