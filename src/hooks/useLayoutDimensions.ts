import { useMemo } from "react";

import { SPACING } from "../constants";
import useMediaQuery from "./useMediaQuery";

const CONTENT_MAX_WIDTH = 1200;
const CONTENT_MAX_WIDTH_TABLET = 800;

const useLayoutDimensions = () => {
  const { isTabletOrSmaller, isMobileOrSmaller } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      verticalPadding: isMobileOrSmaller
        ? SPACING._5
        : isTabletOrSmaller
        ? SPACING._6
        : SPACING._7,
      horizontalPadding: isMobileOrSmaller
        ? SPACING._6
        : isTabletOrSmaller
        ? SPACING._7
        : SPACING._8,
      contentMaxWidth: isTabletOrSmaller
        ? CONTENT_MAX_WIDTH_TABLET
        : CONTENT_MAX_WIDTH,
    };
  }, [isMobileOrSmaller, isTabletOrSmaller]);

  return dimensions;
};

export default useLayoutDimensions;
