import { useState, useEffect } from "react";

const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading;
};

export default useIsLoading;
