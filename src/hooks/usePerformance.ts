import { useEffect } from 'react';

export function usePerformance() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Performance:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('Largest Contentful Paint:', entry.startTime);
        }
        
        if (entry.entryType === 'first-input') {
          const inputEntry = entry as PerformanceEventTiming;
          console.log('First Input Delay:', inputEntry.processingStart - inputEntry.startTime);
        }
      }
    });

    // Observe performance metrics
    observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
}

// Web Vitals monitoring
export function reportWebVitals(metric: unknown) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
  
  // In production, you might want to send this to an analytics service
  // Example: gtag('event', metric.name, { value: metric.value });
}