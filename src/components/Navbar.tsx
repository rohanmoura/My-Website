'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/contexts/NavigationContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { navigateWithLoader } = useNavigation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const pathname = usePathname();



  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Custom Arrow Component
  const CustomArrow = ({ isOpen = false, className = '' }: { isOpen?: boolean; className?: string }) => {
    return (
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>
    );
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 bg-[#0f0f0f]/95 border-0"
      initial={{
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        borderRadius: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        borderWidth: '0px',
        borderColor: 'rgba(68, 68, 68, 0.3)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(15, 15, 15, 0.95)',
        borderRadius: isScrolled ? '24px' : '0px',
        marginLeft: isScrolled ? '16px' : '0px',
        marginRight: isScrolled ? '16px' : '0px',
        marginTop: isScrolled ? '4px' : '0px',
        borderWidth: isScrolled ? '1px' : '0px',
        borderColor: isScrolled ? 'rgba(68, 68, 68, 0.3)' : 'transparent',
        boxShadow: isScrolled
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 16px rgba(0, 0, 0, 0.2)'
          : '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      style={{
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{
          paddingLeft: isScrolled ? '32px' : '16px',
          paddingRight: isScrolled ? '32px' : '16px'
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold transition-all duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              <motion.span
                className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                whileHover={{
                  backgroundImage: 'linear-gradient(to right, #ffffff, #f0f0f0)'
                }}
              >
                YourName
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={(e) => navigateWithLoader('/', e)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActiveLink('/') ? 'text-white' : ''
                }`}
                style={{
                  color: isActiveLink('/') ? '#FFFFFF' : 'var(--text-primary)',
                  backgroundColor: isActiveLink('/') ? 'var(--bg-hover)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink('/')) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink('/')) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                Home
                {isActiveLink('/') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname.startsWith('/services') ? 'text-white' : ''
                  }`}
                style={{
                  color: pathname.startsWith('/services') ? '#FFFFFF' : 'var(--text-primary)',
                  backgroundColor: pathname.startsWith('/services') ? 'var(--bg-hover)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!pathname.startsWith('/services')) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!pathname.startsWith('/services')) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                <span className="relative">
                  What I Build
                  {pathname.startsWith('/services') && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </span>
                <CustomArrow
                  isOpen={isServicesOpen}
                  className="ml-2 transition-transform duration-300"
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute left-0 top-full w-56 rounded-xl shadow-2xl border"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-primary)'
                    }}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      {[
                        { name: 'Landing Pages', href: '/services/landing-pages', desc: 'High-converting pages' },
                        { name: 'Ecommerce Sites', href: '/services/ecommerce', desc: 'Online stores' },
                        { name: 'Business Websites', href: '/services/business-websites', desc: 'Professional sites' },
                        { name: 'Web Applications', href: '/services/web-apps', desc: 'Custom solutions' },
                        { name: 'Portfolio Sites', href: '/services/portfolios', desc: 'Showcase work' }
                      ].map((service) => (
                        <motion.div
                          key={service.name}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={service.href}
                            className="block px-4 py-3 transition-all duration-300"
                            style={{ color: 'var(--text-primary)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                              e.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                              {service.desc}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={(e) => navigateWithLoader('/work', e)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActiveLink('/work') ? 'text-white' : ''
                }`}
                style={{
                  color: isActiveLink('/work') ? '#FFFFFF' : 'var(--text-primary)',
                  backgroundColor: isActiveLink('/work') ? 'var(--bg-hover)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink('/work')) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink('/work')) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                My Work
                {isActiveLink('/work') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={(e) => navigateWithLoader('/about', e)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActiveLink('/about') ? 'text-white' : ''
                }`}
                style={{
                  color: isActiveLink('/about') ? '#FFFFFF' : 'var(--text-primary)',
                  backgroundColor: isActiveLink('/about') ? 'var(--bg-hover)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink('/about')) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink('/about')) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                About
                {isActiveLink('/about') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={(e) => navigateWithLoader('/contact', e)}
                className="ml-4 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                }}
              >
                Start Your Website
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{
                backgroundColor: 'var(--bg-hover)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="px-4 py-4 space-y-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={(e) => {
                    navigateWithLoader('/', e);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 active:scale-95 ${isActiveLink('/') ? 'bg-opacity-20' : ''
                    }`}
                  style={{
                    color: isActiveLink('/') ? '#FFFFFF' : 'var(--text-primary)',
                    backgroundColor: isActiveLink('/') ? 'var(--bg-hover)' : 'transparent'
                  }}
                  onTouchStart={(e) => {
                    if (!isActiveLink('/')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (!isActiveLink('/')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  Home
                </button>
              </motion.div>

              {/* Mobile Services */}
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={toggleServices}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${pathname.startsWith('/services') ? 'bg-opacity-20' : ''
                    }`}
                  style={{
                    color: pathname.startsWith('/services') ? '#FFFFFF' : 'var(--text-primary)',
                    backgroundColor: pathname.startsWith('/services') ? 'var(--bg-hover)' : 'transparent'
                  }}
                  onTouchStart={(e) => {
                    if (!pathname.startsWith('/services')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (!pathname.startsWith('/services')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (!pathname.startsWith('/services')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pathname.startsWith('/services')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  What I Build
                  <CustomArrow isOpen={isServicesOpen} className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      className="ml-4 mt-2 space-y-1"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {[
                        { name: 'Landing Pages', href: '/services/landing-pages' },
                        { name: 'Ecommerce Sites', href: '/services/ecommerce' },
                        { name: 'Business Websites', href: '/services/business-websites' },
                        { name: 'Web Applications', href: '/services/web-apps' },
                        { name: 'Portfolio Sites', href: '/services/portfolios' }
                      ].map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button
                            onClick={(e) => {
                              navigateWithLoader(service.href, e);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-300 active:scale-95"
                            style={{ color: 'var(--text-secondary)' }}
                            onTouchStart={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            onTouchEnd={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                            }}
                          >
                            {service.name}
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={(e) => {
                    navigateWithLoader('/work', e);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 active:scale-95 ${isActiveLink('/work') ? 'bg-opacity-20' : ''
                    }`}
                  style={{
                    color: isActiveLink('/work') ? '#FFFFFF' : 'var(--text-primary)',
                    backgroundColor: isActiveLink('/work') ? 'var(--bg-hover)' : 'transparent'
                  }}
                  onTouchStart={(e) => {
                    if (!isActiveLink('/work')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (!isActiveLink('/work')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/work')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/work')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  My Work
                </button>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={(e) => {
                    navigateWithLoader('/about', e);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 active:scale-95 ${isActiveLink('/about') ? 'bg-opacity-20' : ''
                    }`}
                  style={{
                    color: isActiveLink('/about') ? '#FFFFFF' : 'var(--text-primary)',
                    backgroundColor: isActiveLink('/about') ? 'var(--bg-hover)' : 'transparent'
                  }}
                  onTouchStart={(e) => {
                    if (!isActiveLink('/about')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (!isActiveLink('/about')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/about')) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/about')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  About
                </button>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mx-4 mt-4"
              >
                <button
                  onClick={(e) => {
                    navigateWithLoader('/contact', e);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-6 py-3 rounded-lg text-center text-base font-semibold transition-all duration-300 active:scale-95"
                  style={{
                    backgroundColor: 'var(--text-primary)',
                    color: 'var(--bg-primary)'
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'scale(0.98)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Start Your Project
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;