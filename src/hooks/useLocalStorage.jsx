import { useState, useEffect } from "react";

/**
 * Custom hook to sync state with LocalStorage
 * @param {string} key - LocalStorage key
 * @param {any} initialValue - Default value if LocalStorage is empty
 * @returns [state, setState] - State and setter function
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Error reading LocalStorage key “" + key + "”:", error);
      return initialValue;
    }
  });

  // Update LocalStorage whenever state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("Error setting LocalStorage key “" + key + "”:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
