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
  const smallTabletLayout = isTabletOrSmaller && rowsCount < clampedRowsCount;
  const gridLayout = isMobileOrSmaller
    ? LAYOUT.MOBILE
    : smallTabletLayout
    ? LAYOUT.C2R8_DEFAULT
    : calcGridLayout(columnsCount, clampedRowsCount, activeItem);
  const fullscreenEnabled = isMobileOrSmaller || smallTabletLayout;

  return {
    gridLayout,
    rowsCount: clampedRowsCount,
    columnsCount,
    fullscreenEnabled,
  };
};

export default useGridLayout;
