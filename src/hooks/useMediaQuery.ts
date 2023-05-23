import { useMemo } from "react";

import { MEDIA_QUERY } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const useMediaQuery = () => {
  const { height, width } = useWindowDimensions();

  const queries = useMemo(() => {
    return {
      isLargeVertical: height >= MEDIA_QUERY.LARGE_VERTICAL,
      isTabletOrSmaller: width <= MEDIA_QUERY.TABLET,
      isMobileOrSmaller: width <= MEDIA_QUERY.MOBILE,
    };
  }, [height, width]);

  return queries;
};

export default useMediaQuery;
