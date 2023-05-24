import { useMemo } from "react";

import { MEDIA_QUERY } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const useMediaQuery = () => {
  const { width } = useWindowDimensions();

  const queries = useMemo(() => {
    return {
      isTabletOrSmaller: width <= MEDIA_QUERY.TABLET,
      isMobileOrSmaller: width <= MEDIA_QUERY.MOBILE,
    };
  }, [width]);

  return queries;
};

export default useMediaQuery;
