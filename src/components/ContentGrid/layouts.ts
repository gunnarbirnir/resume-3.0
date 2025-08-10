import { GridItemType as G } from "./types";

// Mobile

export const MOBILE = [
  [G.Name],
  [G.Terminal],
  [G.Image],
  [G.About],
  [G.Work],
  [G.Skills],
  [G.References],
  [G.Education],
  [G.Languages],
  [G.Email],
  [G.Social],
];

// 2 Columns 8 Rows

export const C2R8_DEFAULT = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.About, G.Image],
  [G.About, G.Image],
  [G.About, G.Email],
  [G.Work, G.Education],
  [G.Skills, G.Education],
  [G.References, G.Social],
];

export const C2R8_WORK = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Work, G.Image],
  [G.Work, G.Image],
  [G.Work, G.Email],
  [G.Work, G.Social],
  [G.Work, G.Skills],
  [G.Work, G.References],
];

export const C2R8_SKILLS = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Work, G.Image],
  [G.Skills, G.Image],
  [G.Skills, G.Email],
  [G.Skills, G.Education],
  [G.Skills, G.Education],
  [G.References, G.Social],
];

export const C2R8_REFERENCES = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Work, G.Image],
  [G.Skills, G.Image],
  [G.References, G.References],
  [G.References, G.References],
  [G.References, G.References],
  [G.References, G.References],
];

// 2 Columns 9 Rows

export const C2R9_DEFAULT = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Terminal, G.Image],
  [G.About, G.Image],
  [G.About, G.Email],
  [G.About, G.Social],
  [G.Work, G.Education],
  [G.Skills, G.Education],
  [G.References, G.Languages],
];

export const C2R9_WORK = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Work, G.Image],
  [G.Work, G.Image],
  [G.Work, G.Email],
  [G.Work, G.Social],
  [G.Work, G.Education],
  [G.Work, G.Education],
  [G.Skills, G.References],
];

export const C2R9_SKILLS = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Terminal, G.Image],
  [G.Work, G.Image],
  [G.Skills, G.Email],
  [G.Skills, G.Social],
  [G.Skills, G.Education],
  [G.Skills, G.Education],
  [G.References, G.Languages],
];

export const C2R9_REFERENCES = [
  [G.Name, G.Image],
  [G.Name, G.Image],
  [G.Terminal, G.Image],
  [G.Work, G.Image],
  [G.Skills, G.Email],
  [G.References, G.References],
  [G.References, G.References],
  [G.References, G.References],
  [G.References, G.References],
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
  [G.Terminal, G.Image, G.References],
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
  [G.Terminal, G.Image, G.Skills],
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
  [G.Terminal, G.Image, G.SkillsStatic],
  [G.About, G.Image, G.SkillsStatic],
  [G.About, G.Email, G.SkillsStatic],
  [G.About, G.Education, G.SkillsStatic],
  [G.Social, G.Education, G.Languages],
];

export const C3R7_WORK = [
  [G.Name, G.Work, G.Work],
  [G.Name, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Work, G.Work],
  [G.Image, G.Education, G.References],
  [G.Social, G.Education, G.Languages],
];

export const C3R7_REFERENCES = [
  [G.Name, G.Image, G.Work],
  [G.Name, G.Image, G.References],
  [G.Terminal, G.Image, G.References],
  [G.About, G.Image, G.References],
  [G.About, G.Email, G.References],
  [G.About, G.Education, G.References],
  [G.Social, G.Education, G.References],
];

// 3 Columns 8 Rows

export const C3R8_DEFAULT = [
  [G.Name, G.Image, G.WorkStatic],
  [G.Name, G.Image, G.WorkStatic],
  [G.Terminal, G.Image, G.WorkStatic],
  [G.About, G.Image, G.WorkStatic],
  [G.About, G.Email, G.WorkStatic],
  [G.About, G.Education, G.WorkStatic],
  [G.Skills, G.Education, G.WorkStatic],
  [G.References, G.Social, G.Languages],
];

export const C3R8_SKILLS = [
  [G.Name, G.Image, G.WorkStatic],
  [G.Name, G.Image, G.WorkStatic],
  [G.Terminal, G.Image, G.WorkStatic],
  [G.Skills, G.Image, G.WorkStatic],
  [G.Skills, G.Email, G.WorkStatic],
  [G.Skills, G.Education, G.WorkStatic],
  [G.Skills, G.Education, G.WorkStatic],
  [G.References, G.Social, G.Languages],
];

export const C3R8_REFERENCES = [
  [G.Name, G.Image, G.WorkStatic],
  [G.Name, G.Image, G.WorkStatic],
  [G.Terminal, G.Image, G.WorkStatic],
  [G.Skills, G.Image, G.WorkStatic],
  [G.References, G.References, G.WorkStatic],
  [G.References, G.References, G.WorkStatic],
  [G.References, G.References, G.WorkStatic],
  [G.References, G.References, G.Languages],
];
