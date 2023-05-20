import { useMemo } from "react";

import { MEDIA_QUERY } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const useMediaQueries = () => {
  const { height, width } = useWindowDimensions();

  const queries = useMemo(() => {
    const isLoaded = height !== undefined && width !== undefined;

    return {
      isLargeDesktop:
        isLoaded &&
        width >= MEDIA_QUERY.DESKTOP_WIDTH &&
        height >= MEDIA_QUERY.LARGE_DESKTOP_HEIGHT,
      isGridOrSmaller: isLoaded && width <= MEDIA_QUERY.GRID,
      isTabletOrSmaller: isLoaded && width <= MEDIA_QUERY.TABLET,
      isMobileOrSmaller: isLoaded && width <= MEDIA_QUERY.MOBILE,
    };
  }, [height, width]);

  return queries;
};

export default useMediaQueries;
