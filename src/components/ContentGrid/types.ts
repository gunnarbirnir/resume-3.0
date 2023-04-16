export enum ContentGridItem {
  Name = "name",
  Info = "info",
  About = "about",
  Image = "image",
  Social = "social",
  Email = "email",
  Languages = "languages",
  Work = "work",
  Skills = "skills",
  References = "references",
  Education = "education",
}

export interface GridItemProps {
  inTransition: boolean;
}

export interface SelectableGridItemProps extends GridItemProps {
  selected: boolean;
  toggleSelected: () => void;
}
