import {
  useWindowDimensions,
  useMediaQuery,
  useMediaQueryVariables,
} from "../../hooks";
import { GridItemType } from "./types";
import { calcRowsCount, clampRowsCount, calcGridLayout } from "./utils";
import * as LAYOUT from "./layouts";

const useGridLayout = (activeItem: GridItemType | null) => {
  const { height: windowHeight } = useWindowDimensions();
  const { isMobileOrSmaller, isTabletOrSmaller } = useMediaQuery();
  const { verticalPadding } = useMediaQueryVariables();

  const columnsCount = isTabletOrSmaller ? 2 : 3;
  const rowsCount = calcRowsCount(windowHeight, verticalPadding);
  const clampedRowsCount = clampRowsCount(rowsCount, columnsCount);
  const gridLayout = isMobileOrSmaller
    ? LAYOUT.MOBILE
    : calcGridLayout(columnsCount, clampedRowsCount, activeItem);
  const smallTabletLayout = isTabletOrSmaller && rowsCount <= 5;
  const fullscreenEnabled = isMobileOrSmaller || smallTabletLayout;

  return {
    gridLayout,
    rowsCount: clampedRowsCount,
    columnsCount,
    fullscreenEnabled,
  };
};

export default useGridLayout;
