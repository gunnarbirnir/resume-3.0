import { useMemo } from "react";

import { MEDIA_QUERY } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const useMediaQuery = () => {
  const { width } = useWindowDimensions();

  const queries = useMemo(() => {
    return {
      isGridDesktopOrSmaller: width <= MEDIA_QUERY.GRID_DESKTOP,
      isTabletOrSmaller: width <= MEDIA_QUERY.TABLET,
      isGridTabletOrSmaller: width <= MEDIA_QUERY.GRID_TABLET,
      isMobileOrSmaller: width <= MEDIA_QUERY.MOBILE,
    };
  }, [width]);

  return queries;
};

export default useMediaQuery;
