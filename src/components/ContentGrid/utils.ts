import { GridItemType } from "./types";

const clamp = (val: number, min: number, max: number) => {
  return Math.max(min, Math.min(val, max));
};

export const getGridLayout = (
  columnCount: number,
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedColumnCount = clamp(columnCount, 2, 3);

  switch (adjustedColumnCount) {
    case 3:
      return get3ColumnsLayout(rowCount, activeItem);
    case 2:
      return get2ColumnsLayout(rowCount, activeItem);
    default:
      return "";
  }
};

const get3ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 7);

  switch (adjustedRowCount) {
    case 7:
      return "";
    case 6:
      return get3Columns6RowsLayout(activeItem);
    case 5:
      return "";
    default:
      return "";
  }
};

const get2ColumnsLayout = (
  rowCount: number,
  activeItem: GridItemType | null
) => {
  const adjustedRowCount = clamp(rowCount, 5, 8);

  switch (adjustedRowCount) {
    case 8:
      return "";
    case 7:
      return "";
    case 6:
      return "";
    case 5:
      return "";
    default:
      return "";
  }
};

const get3Columns6RowsLayout = (activeItem: GridItemType | null) => {
  switch (activeItem) {
    case GridItemType.Work:
      return `
        'name work work'
        'name work work'
        'image work work'
        'image work work'
        'image work work'
        'image skills references'
      `;
    case GridItemType.Skills:
      return `
        'name image work'
        'name image skills'
        'info image skills'
        'about image skills'
        'about email skills'
        'about social references'
      `;
    case GridItemType.References:
      return `
        'name work skills'
        'name references references'
        'image references references'
        'image references references'
        'image references references'
        'image email social'
      `;
    default:
      return `
        'name image work'
        'name image skills'
        'info image references'
        'about image education'
        'about email education'
        'about social languages'
      `;
  }
};
