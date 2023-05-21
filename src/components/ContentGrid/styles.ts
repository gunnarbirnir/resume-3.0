import styled from "styled-components";

import GridItemContainer from "./GridItemContainer";

export const Template = styled.div``;

export const ContentGrid = styled.div`
  width: 100%;
  max-width: var(--content-max-width);
  isolation: isolate;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 350px;
  grid-auto-rows: 100px;
  gap: var(--spacing-5);
`;

export const NameItem = styled(GridItemContainer)`
  grid-area: name;
  grid-row: span 2;
`;

export const InfoItem = styled(GridItemContainer)`
  grid-area: info;
`;

export const AboutItem = styled(GridItemContainer)`
  grid-area: about;
  grid-row: span 3;
`;

export const ImageItem = styled(GridItemContainer)`
  grid-area: image;
  grid-row: span 4;
`;

export const EmailItem = styled(GridItemContainer)`
  grid-area: email;
`;

export const SocialItem = styled(GridItemContainer)`
  grid-area: social;
`;

export const WorkItem = styled(GridItemContainer)`
  grid-area: work;
`;

export const SkillsItem = styled(GridItemContainer)`
  grid-area: skills;
`;

export const ReferencesItem = styled(GridItemContainer)`
  grid-area: references;
`;

export const EducationItem = styled(GridItemContainer)`
  grid-area: education;
  grid-row: span 2;
`;

export const LanguagesItem = styled(GridItemContainer)`
  grid-area: languages;
  grid-row: span 1;
`;
