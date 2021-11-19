import { useState } from "react";

const useLocalStorage = (key = "", initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (key, newState) => {
    try {
      setState(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (error) {
      console.error(`Error occur`);
    }
  };

  return { state, setLocalStorage };
};

export default useLocalStorage;
