import { useEffect, useRef } from "react";
const useEventListener = (eventName, method, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = method;
  }, [method]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, method]);
};

export default useEventListener;
