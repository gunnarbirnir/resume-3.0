import { GridItemType as G } from "./types";

export const DEFAULT = [
  [G.Name, G.Image, G.Email],
  [G.Name, G.Image, G.Social],
  [G.About, G.Image, G.Education],
  [G.About, G.Image, G.Education],
  [G.About, G.Info, G.Languages],
];

// 3 Columns 5 Rows

export const C3R5_DEFAULT = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.About, G.Image, G.References],
  [G.About, G.Email, G.Education],
  [G.About, G.Social, G.Education],
];

export const C3R5_WORK = [
  [G.Name, G.Work, G.Work],
  [G.Name, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Skills, G.References],
];

export const C3R5_SKILLS = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.About, G.Image, G.Skills],
  [G.About, G.Email, G.Skills],
  [G.About, G.References, G.Skills],
];

export const C3R5_REFERENCES = [
  [G.Name, G.Work, G.Skills],
  [G.Name, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
];

// 3 Columns 6 Rows

export const C3R6_DEFAULT = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.Skills],
  [G.Info, G.Image, G.References],
  [G.About, G.Image, G.Education],
  [G.About, G.Email, G.Education],
  [G.About, G.Social, G.Languages],
];

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

// 3 Columns 7 Rows

export const C3R7_DEFAULT = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.References],
  [G.Info, G.Image, G.SkillsStatic],
  [G.About, G.Image, G.SkillsStatic],
  [G.About, G.Education, G.SkillsStatic],
  [G.About, G.Education, G.SkillsStatic],
  [G.Email, G.Social, G.Languages],
];

export const C3R7_WORK = [
  [G.Name, G.Work, G.Work],
  [G.Name, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Email, G.Social, G.References],
];

export const C3R7_REFERENCES = [
  [G.Name, G.Info, G.Work],
  [G.Name, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.References, G.References],
  [G.Image, G.Education, G.Languages],
  [G.Email, G.Education, G.Social],
];
