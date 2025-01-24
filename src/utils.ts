export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number = 300): T {
    let timeout: NodeJS.Timeout | null = null;
  
    return ((...args: Parameters<T>) => {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null; 
      }, delay);
    }) as T;
  }