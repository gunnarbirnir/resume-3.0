import { useMemo } from "react";

import {
  SPACING,
  CONTENT_MAX_WIDTH,
  CONTENT_MAX_WIDTH_TABLET,
  PAGE_HORIZONTAL_PADDING,
  PAGE_HORIZONTAL_PADDING_TABLET,
  GRID_ROW_MAX_HEIGHT,
} from "../constants";
import useWindowDimensions from "./useWindowDimensions";
import useMediaQuery from "./useMediaQuery";

const ROWS_6_MAX_HEIGHT_PADDING_8 =
  6 * GRID_ROW_MAX_HEIGHT + 5 * SPACING._5 + 2 * SPACING._8;

const useMediaQueryVariables = () => {
  const { height } = useWindowDimensions();
  const { isTabletOrSmaller } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      contentMaxWidth: isTabletOrSmaller
        ? CONTENT_MAX_WIDTH_TABLET
        : CONTENT_MAX_WIDTH,
      horizontalPadding: isTabletOrSmaller
        ? PAGE_HORIZONTAL_PADDING_TABLET
        : PAGE_HORIZONTAL_PADDING,
      verticalPadding:
        // To delay 7 rows layout
        height > ROWS_6_MAX_HEIGHT_PADDING_8 ? SPACING._8 : SPACING._7,
    };
  }, [isTabletOrSmaller, height]);

  return dimensions;
};

export default useMediaQueryVariables;
