import { GridItemType as G } from "./types";

export const C3R6_DEFAULT = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.Info, G.Image, G.References],
  [G.About, G.Image, G.Education],
  [G.About, G.Email, G.Education],
  [G.About, G.Social, G.Languages],
];

export const DEFAULT = C3R6_DEFAULT;

export const C3R6_WORK = [
  [G.Name, G.Work, G.Work],
  [G.Name, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Skills, G.References],
];

export const C3R6_SKILLS = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.Info, G.Image, G.Skills],
  [G.About, G.Image, G.Skills],
  [G.About, G.Email, G.Skills],
  [G.About, G.Social, G.References],
];

export const C3R6_REFERENCES = [
  [G.Name, G.Work, G.Skills],
  [G.Name, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.Email, G.Social],
];
