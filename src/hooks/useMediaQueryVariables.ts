import { useMemo } from "react";

import { SPACING, GRID_ROW_MAX_HEIGHT } from "../constants";
import useWindowDimensions from "./useWindowDimensions";

const ROWS_6_MAX_HEIGHT_SPACING_8 =
  6 * GRID_ROW_MAX_HEIGHT + 5 * SPACING._5 + 2 * SPACING._8;

// Change name if no other variables are added
const useMediaQueryVariables = () => {
  const { height } = useWindowDimensions();

  const dimensions = useMemo(() => {
    return {
      verticalPadding:
        // To delay 7 rows layout
        height > ROWS_6_MAX_HEIGHT_SPACING_8 ? SPACING._8 : SPACING._7,
    };
  }, [height]);

  return dimensions;
};

export default useMediaQueryVariables;
