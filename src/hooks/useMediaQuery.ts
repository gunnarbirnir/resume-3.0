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
    const isGridMobileOrSmaller = width <= MEDIA_QUERY.GRID_MOBILE;

    const isDesktopOnly = !isGridDesktopOrSmaller;
    const isGridDesktopOnly = isGridDesktopOrSmaller && !isTabletOrSmaller;
    const isTabletOnly = isTabletOrSmaller && !isGridTabletOrSmaller;
    const isGridTabletOnly = isGridTabletOrSmaller && !isMobileOrSmaller;
    const isMobileOnly = isMobileOrSmaller && !isGridMobileOrSmaller;

    return {
      isGridDesktopOrSmaller,
      isTabletOrSmaller,
      isGridTabletOrSmaller,
      isMobileOrSmaller,
      isGridMobileOrSmaller,

      isDesktopOnly,
      isGridDesktopOnly,
      isTabletOnly,
      isGridTabletOnly,
      isMobileOnly,

      isGridSize:
        isGridDesktopOnly || isGridTabletOnly || isGridMobileOrSmaller,
    };
  }, [width]);

  return queries;
};

export default useMediaQuery;
