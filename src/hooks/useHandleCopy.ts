import { useState, useEffect, useCallback } from "react";

const CLICK_TIMEOUT = 3000;

const useHandleCopy = (): [string, (text: string) => void] => {
  const [active, setActive] = useState("");

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setActive(text);
  }, []);

  useEffect(() => {
    let clickTimeout: number | null = null;

    if (active) {
      clickTimeout = setTimeout(() => {
        setActive("");
      }, CLICK_TIMEOUT);
    }

    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [active]);

  return [active, handleCopy];
};

export default useHandleCopy;
