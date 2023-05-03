import { useState, useEffect } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading;
};

export default useLoading;
