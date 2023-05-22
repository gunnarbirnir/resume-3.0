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
  const columnsCount = Math.floor(
    contentWidth / (GRID_COLUMN_MIN_WIDTH + GRID_SPACING)
  );

  return clamp(columnsCount, 2, 3);
};

export const calcRowsCount = (
  windowHeight: number,
  verticalPadding: number,
  columnsCount: number
) => {
  const contentHeight = windowHeight - 2 * verticalPadding;
  const rowsCount = Math.floor(
    contentHeight / (GRID_ROW_MIN_HEIGHT + GRID_SPACING)
  );

  return clamp(rowsCount, 5, columnsCount === 2 ? 8 : 7);
};

export const hideGridItem = (
  item: GridItemType,
  gridLayout: GridItemType[][]
) => {
  for (const gridRow of gridLayout) {
    if (gridRow.includes(item)) {
      return false;
    }
  }
  return true;
};

const clamp = (val: number, min: number, max: number) => {
  return Math.max(min, Math.min(val, max));
};

export const formatGridString = (rows: GridItemType[][]) => {
  const rowStrings = rows.map((rowItems) =>
    rowItems.map((item) => item.toString()).join(" ")
  );

  return rowStrings.map((row) => `'${row}'`).join("\n");
};

export const calcGridLayout = (
  columnsCount: number,
  rowsCount: number,
  activeItem: GridItemType | null
) => {
  switch (columnsCount) {
    case 3:
      return calc3ColumnsLayout(rowsCount, activeItem);
    case 2:
      return calc2ColumnsLayout(rowsCount, activeItem);
    default:
      return LAYOUT.DEFAULT;
  }
};

const calc3ColumnsLayout = (
  rowsCount: number,
  activeItem: GridItemType | null
) => {
  switch (rowsCount) {
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
  rowsCount: number,
  activeItem: GridItemType | null
) => {
  switch (rowsCount) {
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
