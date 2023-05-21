import { GridItemType, GridItemType as G } from "./types";
import {
  GRID_COLUMN_WIDTH,
  GRID_ROW_HEIGHT,
  HORIZONTAL_PADDING,
  VERTICAL_PADDING,
} from "./constants";
import * as LAYOUT from "./layouts";

export const calcColumnCount = (windowWidth: number) => {
  return Math.floor((windowWidth - 2 * HORIZONTAL_PADDING) / GRID_COLUMN_WIDTH);
};

export const calcRowCount = (windowHeight: number) => {
  return Math.floor((windowHeight - 2 * VERTICAL_PADDING) / GRID_ROW_HEIGHT);
};

export const hideGridItem = (item: GridItemType, gridLayout: string) => {
  return !gridLayout.includes(item.toString());
};

const clamp = (val: number, min: number, max: number) => {
  return Math.max(min, Math.min(val, max));
};

const formatGridString = (rows: GridItemType[][]) => {
  const rowStrings = rows.map((rowItems) =>
    rowItems.map((item) => item.toString()).join(" ")
  );

  return rowStrings.map((row) => `'${row}'`).join("\n");
};

export const calcGridLayout = (
  columnCount: number,
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const gridItems = calcGridLayoutItems(columnCount, rowCount, activeItem);

  return formatGridString(gridItems);
};

export const calcGridLayoutItems = (
  columnCount: number,
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedColumnCount = clamp(columnCount, 2, 3);

  switch (adjustedColumnCount) {
    case 3:
      return calc3ColumnsLayout(rowCount, activeItem);
    case 2:
      return calc2ColumnsLayout(rowCount, activeItem);
    default:
      return LAYOUT.DEFAULT;
  }
};

const calc3ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 7);

  switch (adjustedRowCount) {
    case 7:
      return LAYOUT.DEFAULT;
    case 6:
      return calcC3R6Layout(activeItem);
    case 5:
      return LAYOUT.DEFAULT;
    default:
      return LAYOUT.DEFAULT;
  }
};

const calc2ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 8);

  switch (adjustedRowCount) {
    case 8:
      return LAYOUT.DEFAULT;
    case 7:
      return LAYOUT.DEFAULT;
    case 6:
      return LAYOUT.DEFAULT;
    case 5:
      return LAYOUT.DEFAULT;
    default:
      return LAYOUT.DEFAULT;
  }
};

const calcC3R6Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C3R6_WORK;
    case GridItemType.Skills:
      return LAYOUT.C3R6_SKILLS;
    case GridItemType.References:
      return LAYOUT.C3R6_REFERENCES;
    default:
      return LAYOUT.C3R6_DEFAULT;
  }
};
