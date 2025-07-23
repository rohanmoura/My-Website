'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              YourName
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center">
                  What I Build
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link href="/services/landing-pages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      Landing Pages
                    </Link>
                    <Link href="/services/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      Ecommerce
                    </Link>
                    <Link href="/services/portfolios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      Portfolios
                    </Link>
                    <Link href="/services/business-websites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      Business Websites
                    </Link>
                    <Link href="/services/web-apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      Web Apps
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/work" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                My Work
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">What I Build</div>
              <div className="pl-4 space-y-1">
                <Link href="/services/landing-pages" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Landing Pages
                </Link>
                <Link href="/services/ecommerce" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Ecommerce
                </Link>
                <Link href="/services/portfolios" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Portfolios
                </Link>
                <Link href="/services/business-websites" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Business Websites
                </Link>
                <Link href="/services/web-apps" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Web Apps
                </Link>
              </div>
            </div>
            <Link href="/work" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
              My Work
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="block mx-3 my-2 px-4 py-2 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;