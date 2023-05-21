import { GridItemType as G } from "./types";

export const GRID_COLUMN_WIDTH = 350;
export const GRID_ROW_HEIGHT = 100;
export const HORIZONTAL_PADDING = 64;
export const VERTICAL_PADDING = 80;

export const DEFAULT_GRID_ITEMS = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.Info, G.Image, G.References],
  [G.About, G.Image, G.Education],
  [G.About, G.Email, G.Education],
  [G.About, G.Social, G.Languages],
];
