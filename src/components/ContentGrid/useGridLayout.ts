import {
  useWindowDimensions,
  useMediaQuery,
  useMediaQueryVariables,
} from "../../hooks";
import { GridItemType } from "./types";
import { calcRowsCount, calcGridLayout } from "./utils";
import * as LAYOUT from "./layouts";

const useGridLayout = (activeItem: GridItemType | null) => {
  const { height: windowHeight } = useWindowDimensions();
  const { isMobileOrSmaller, isTabletOrSmaller } = useMediaQuery();
  const { verticalPadding } = useMediaQueryVariables();

  const columnsCount = isTabletOrSmaller ? 2 : 3;
  const rowsCount = calcRowsCount(windowHeight, verticalPadding, columnsCount);
  const gridLayout = isMobileOrSmaller
    ? LAYOUT.MOBILE
    : calcGridLayout(columnsCount, rowsCount, activeItem);

  return { gridLayout, rowsCount, columnsCount };
};

export default useGridLayout;
