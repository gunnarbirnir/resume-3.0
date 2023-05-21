import { GridItemType, GridItemType as G } from "./types";
import {
  GRID_COLUMN_WIDTH,
  GRID_ROW_HEIGHT,
  HORIZONTAL_PADDING,
  VERTICAL_PADDING,
  DEFAULT_GRID_ITEMS,
} from "./constants";

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
      return DEFAULT_GRID_ITEMS;
  }
};

const calc3ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 7);

  switch (adjustedRowCount) {
    case 7:
      return DEFAULT_GRID_ITEMS;
    case 6:
      return calcC3R6Layout(activeItem);
    case 5:
      return DEFAULT_GRID_ITEMS;
    default:
      return DEFAULT_GRID_ITEMS;
  }
};

const calc2ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 8);

  switch (adjustedRowCount) {
    case 8:
      return DEFAULT_GRID_ITEMS;
    case 7:
      return DEFAULT_GRID_ITEMS;
    case 6:
      return DEFAULT_GRID_ITEMS;
    case 5:
      return DEFAULT_GRID_ITEMS;
    default:
      return DEFAULT_GRID_ITEMS;
  }
};

const calcC3R6Layout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return [
        [G.Name, G.Work, G.Work],
        [G.Name, G.Work, G.Work],
        [G.Image, G.Work, G.Work],
        [G.Image, G.Work, G.Work],
        [G.Image, G.Work, G.Work],
        [G.Image, G.Skills, G.References],
      ];
    case GridItemType.Skills:
      return [
        [G.Name, G.Image, G.Work],
        [G.Name, G.Image, G.Skills],
        [G.Info, G.Image, G.Skills],
        [G.About, G.Image, G.Skills],
        [G.About, G.Email, G.Skills],
        [G.About, G.Social, G.References],
      ];
    case GridItemType.References:
      return [
        [G.Name, G.Work, G.Skills],
        [G.Name, G.References, G.References],
        [G.Image, G.References, G.References],
        [G.Image, G.References, G.References],
        [G.Image, G.References, G.References],
        [G.Image, G.Email, G.Social],
      ];
    default:
      return DEFAULT_GRID_ITEMS;
  }
};
