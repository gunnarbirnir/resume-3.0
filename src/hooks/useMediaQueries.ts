import { useMemo } from "react";

import useWindowDimensions from "./useWindowDimensions";

const useMediaQueries = () => {
  const { height } = useWindowDimensions();

  const queries = useMemo(
    () => ({
      isLargeVertical: height !== undefined && height >= 940,
    }),
    [height]
  );

  return queries;
};

export default useMediaQueries;
