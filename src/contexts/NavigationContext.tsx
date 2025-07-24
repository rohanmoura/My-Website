'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationContextType {
  isLoaderActive: boolean;
  navigateWithLoader: (targetPath: string, e?: React.MouseEvent) => void;
  resetLoader: () => void;
  handleLoaderComplete: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithLoader = useCallback((targetPath: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Don't trigger loader if already on the target page
    if (pathname === targetPath) {
      return;
    }
    
    // Start loader and navigation immediately
    setIsLoaderActive(true);
    setIsNavigating(true);
    router.push(targetPath);
  }, [pathname, router]);

  const handleLoaderComplete = useCallback(() => {
    // This is called by the arrow loader animation when it completes
    // But we only hide the loader if navigation is also complete
    if (!isNavigating) {
      setIsLoaderActive(false);
    }
  }, [isNavigating]);

  const resetLoader = useCallback(() => {
    setIsLoaderActive(false);
    setIsNavigating(false);
  }, []);

  // Hide loader when pathname changes (navigation complete)
  useEffect(() => {
    if (isNavigating) {
      // Add a small delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        setIsLoaderActive(false);
        setIsNavigating(false);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isNavigating]);

  return (
    <NavigationContext.Provider value={{ isLoaderActive, navigateWithLoader, resetLoader, handleLoaderComplete }}>
      {children}
    </NavigationContext.Provider>
  );
};