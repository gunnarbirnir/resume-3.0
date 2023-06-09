import { useMemo } from "react";

import {
  SPACING,
  CONTENT_MAX_WIDTH,
  CONTENT_MAX_WIDTH_TABLET,
  CONTENT_MAX_WIDTH_MOBILE,
  PAGE_HORIZONTAL_PADDING,
  PAGE_HORIZONTAL_PADDING_TABLET,
  PAGE_HORIZONTAL_PADDING_MOBILE,
  GRID_ROW_MAX_HEIGHT,
} from "../constants";
import useWindowDimensions from "./useWindowDimensions";
import useMediaQuery from "./useMediaQuery";

const ROWS_6_MAX_HEIGHT_PADDING_8 =
  6 * GRID_ROW_MAX_HEIGHT + 5 * SPACING._5 + 2 * SPACING._8;

const useMediaQueryVariables = () => {
  const { height } = useWindowDimensions();
  const { isMobileOrSmaller, isTabletOrSmaller } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      contentMaxWidth: isMobileOrSmaller
        ? CONTENT_MAX_WIDTH_MOBILE
        : isTabletOrSmaller
        ? CONTENT_MAX_WIDTH_TABLET
        : CONTENT_MAX_WIDTH,
      horizontalPadding: isMobileOrSmaller
        ? PAGE_HORIZONTAL_PADDING_MOBILE
        : isTabletOrSmaller
        ? PAGE_HORIZONTAL_PADDING_TABLET
        : PAGE_HORIZONTAL_PADDING,
      verticalPadding:
        // To delay 7 rows layout
        height > ROWS_6_MAX_HEIGHT_PADDING_8 ? SPACING._8 : SPACING._7,
    };
  }, [isMobileOrSmaller, isTabletOrSmaller, height]);

  return dimensions;
};

export default useMediaQueryVariables;
