import React from 'react';

const PortfolioUI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Column 1: Header */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Oluchukwu
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a <span className="text-green-600 font-semibold">UX Designer</span> from Lagos, Nigeria.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I have 2+ years experience in using data to inform the creation of impactful, 
              timeless designs in the fintech space.
            </p>
          </div>

          {/* Column 2: Profile Card */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 aspect-[4/5] bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-end justify-center bg-gradient-to-t from-green-600 to-green-400">
                  <div className="w-32 h-32 bg-white/20 rounded-full mb-8 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Small plant decoration */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Menu */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-sm">
              <nav className="space-y-4">
                <a 
                  href="#work" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                    <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
                  </div>
                  <span className="font-medium">My Work</span>
                </a>
                
                <a 
                  href="#about" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">About Me</span>
                </a>
                
                <a 
                  href="#links" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">My Links</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioUI;