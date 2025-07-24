'use client';

import { useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useNavigationLoader = () => {
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithLoader = useCallback((targetPath: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Don't trigger loader if already on the target page
    if (pathname === targetPath) {
      router.push(targetPath);
      return;
    }
    
    setIsLoaderActive(true);
  }, [pathname, router]);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderActive(false);
  }, []);

  const resetLoader = useCallback(() => {
    setIsLoaderActive(false);
  }, []);

  return {
    isLoaderActive,
    navigateWithLoader,
    handleLoaderComplete,
    resetLoader
  };
};