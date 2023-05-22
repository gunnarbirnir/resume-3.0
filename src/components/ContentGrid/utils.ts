import { GridItemType } from "./types";
import {
  GRID_COLUMN_MIN_WIDTH,
  GRID_ROW_MIN_HEIGHT,
  GRID_SPACING,
} from "./constants";
import * as LAYOUT from "./layouts";

export const calcColumnsCount = (
  windowWidth: number,
  contentMaxWidth: number,
  horizontalPadding: number
) => {
  const availableWidth = windowWidth - 2 * horizontalPadding;
  const contentWidth = Math.min(availableWidth, contentMaxWidth);

  return Math.floor(contentWidth / (GRID_COLUMN_MIN_WIDTH + GRID_SPACING));
};

export const calcRowsCount = (
  windowHeight: number,
  verticalPadding: number
) => {
  const contentHeight = windowHeight - 2 * verticalPadding;

  return Math.floor(contentHeight / (GRID_ROW_MIN_HEIGHT + GRID_SPACING));
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
      return calcC3R7Layout(activeItem);
    case 6:
      return calcC3R6Layout(activeItem);
    case 5:
      return calcC3R5Layout(activeItem);
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

const calcC3R5Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C3R5_WORK;
    case GridItemType.Skills:
      return LAYOUT.C3R5_SKILLS;
    case GridItemType.References:
      return LAYOUT.C3R5_REFERENCES;
    default:
      return LAYOUT.C3R5_DEFAULT;
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

const calcC3R7Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C3R7_WORK;
    case GridItemType.References:
      return LAYOUT.C3R7_REFERENCES;
    default:
      return LAYOUT.C3R7_DEFAULT;
  }
};
