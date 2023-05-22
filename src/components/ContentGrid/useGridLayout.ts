import { useWindowDimensions, useLayoutDimensions } from "../../hooks";
import { GridItemType } from "./types";
import { calcColumnsCount, calcRowsCount, calcGridLayout } from "./utils";

const useGridLayout = (activeItem: GridItemType | null) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { verticalPadding, horizontalPadding, contentMaxWidth } =
    useLayoutDimensions();

  const columnsCount = calcColumnsCount(
    windowWidth,
    contentMaxWidth,
    horizontalPadding
  );
  const rowsCount = calcRowsCount(windowHeight, verticalPadding);
  const gridLayout = calcGridLayout(columnsCount, rowsCount, activeItem);

  console.log("columnCount: ", columnsCount);
  console.log("rowCount: ", rowsCount);
  console.log("gridLayout: ", gridLayout);
  console.log("---------------");

  return { gridLayout, rowsCount, columnsCount };
};

export default useGridLayout;
