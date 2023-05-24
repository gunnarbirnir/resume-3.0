import { useMemo } from "react";

import { MEDIA_QUERY } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const useMediaQuery = () => {
  const { width } = useWindowDimensions();

  const queries = useMemo(() => {
    const isGridDesktopOrSmaller = width <= MEDIA_QUERY.GRID_DESKTOP;
    const isTabletOrSmaller = width <= MEDIA_QUERY.TABLET;
    const isGridTabletOrSmaller = width <= MEDIA_QUERY.GRID_TABLET;
    const isMobileOrSmaller = width <= MEDIA_QUERY.MOBILE;

    return {
      isGridDesktopOrSmaller,
      isTabletOrSmaller,
      isGridTabletOrSmaller,
      isMobileOrSmaller,

      isDesktop: !isGridDesktopOrSmaller,
      isGridDesktop: isGridDesktopOrSmaller && !isTabletOrSmaller,
      isTablet: isTabletOrSmaller && !isGridTabletOrSmaller,
      isGridTablet: isGridTabletOrSmaller && !isMobileOrSmaller,
    };
  }, [width]);

  return queries;
};

export default useMediaQuery;
