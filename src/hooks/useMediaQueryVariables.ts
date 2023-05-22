import { useMemo } from "react";

import { SPACING } from "../constants";
import useMediaQuery from "./useMediaQuery";

const useMediaQueryVariables = () => {
  const { isTabletOrSmaller, isMobileOrSmaller } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      verticalPadding: isMobileOrSmaller
        ? SPACING._5
        : isTabletOrSmaller
        ? SPACING._6
        : SPACING._7,
    };
  }, [isMobileOrSmaller, isTabletOrSmaller]);

  return dimensions;
};

export default useMediaQueryVariables;
