import { GridItemType } from "./types";
import { GRID_ROW_MIN_HEIGHT, GRID_SPACING } from "../../constants";
import * as LAYOUT from "./layouts";

export const calcRowsCount = (
  windowHeight: number,
  verticalPadding: number
) => {
  const contentHeight = windowHeight - 2 * verticalPadding;
  // rowsCount * GRID_ROW_MIN_HEIGHT + (rowsCount - 1) * GRID_SPACING <= contentHeight
  const rowsCount = Math.floor(
    (contentHeight + GRID_SPACING) / (GRID_ROW_MIN_HEIGHT + GRID_SPACING)
  );

  return rowsCount;
};

export const clampRowsCount = (rowsCount: number, columnsCount: number) => {
  if (columnsCount === 2) {
    return clamp(rowsCount, 8, 9);
  }

  return clamp(rowsCount, 5, 7);
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

export const calcItemColumnsAndRows = (
  item: GridItemType,
  gridLayout: GridItemType[][]
) => {
  const columnsObj: Record<number, boolean> = {};
  const rowsObj: Record<number, boolean> = {};

  gridLayout.forEach((gridRow, rowIndex) => {
    gridRow.forEach((gridItem, columnIndex) => {
      if (gridItem === item) {
        columnsObj[columnIndex] = true;
        rowsObj[rowIndex] = true;
      }
    });
  });

  return {
    columns: Object.keys(columnsObj).length,
    rows: Object.keys(rowsObj).length,
  };
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
      return [];
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
      return [];
  }
};

const calc2ColumnsLayout = (
  rowsCount: number,
  activeItem: GridItemType | null
) => {
  switch (rowsCount) {
    case 9:
      return calcC2R9Layout(activeItem);
    case 8:
      return calcC2R8Layout(activeItem);
    default:
      return [];
  }
};

const calcC2R9Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C2R9_WORK;
    case GridItemType.Skills:
      return LAYOUT.C2R9_SKILLS;
    case GridItemType.References:
      return LAYOUT.C2R9_REFERENCES;
    default:
      return LAYOUT.C2R9_DEFAULT;
  }
};

const calcC2R8Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C2R8_WORK;
    case GridItemType.Skills:
      return LAYOUT.C2R8_SKILLS;
    case GridItemType.References:
      return LAYOUT.C2R8_REFERENCES;
    default:
      return LAYOUT.C2R8_DEFAULT;
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
