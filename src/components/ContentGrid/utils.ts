import { GridItemType } from "./types";
import { GRID_ROW_MIN_HEIGHT, GRID_SPACING } from "./constants";
import * as LAYOUT from "./layouts";

export const calcRowsCount = (
  windowHeight: number,
  verticalPadding: number,
  columnsCount: number
) => {
  const contentHeight = windowHeight - 2 * verticalPadding;
  const rowsCount = Math.floor(
    contentHeight / (GRID_ROW_MIN_HEIGHT + GRID_SPACING)
  );

  if (columnsCount === 2) {
    return clamp(rowsCount, 5, 9);
  }

  return clamp(rowsCount, 4, 7);
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
      return LAYOUT.C3R6_DEFAULT;
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
    case 4:
      return calcC3R4Layout(activeItem);
    default:
      return LAYOUT.C3R6_DEFAULT;
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
    case 7:
      return calcC2R7Layout(activeItem);
    case 6:
      return calcC2R6Layout(activeItem);
    case 5:
      return calcC2R5Layout(activeItem);
    default:
      return LAYOUT.DEFAULT;
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

const calcC2R7Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C2R7_WORK;
    case GridItemType.Skills:
      return LAYOUT.C2R7_SKILLS;
    case GridItemType.References:
      return LAYOUT.C2R7_REFERENCES;
    default:
      return LAYOUT.C2R7_DEFAULT;
  }
};

const calcC2R6Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C2R6_WORK;
    case GridItemType.Skills:
      return LAYOUT.C2R6_SKILLS;
    case GridItemType.References:
      return LAYOUT.C2R6_REFERENCES;
    default:
      return LAYOUT.C2R6_DEFAULT;
  }
};

const calcC2R5Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C2R5_WORK;
    case GridItemType.Skills:
      return LAYOUT.C2R5_SKILLS;
    case GridItemType.References:
      return LAYOUT.C2R5_REFERENCES;
    default:
      return LAYOUT.C2R5_DEFAULT;
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

const calcC3R4Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return LAYOUT.C3R4_WORK;
    case GridItemType.Skills:
      return LAYOUT.C3R4_SKILLS;
    case GridItemType.References:
      return LAYOUT.C3R4_REFERENCES;
    default:
      return LAYOUT.C3R4_DEFAULT;
  }
};
