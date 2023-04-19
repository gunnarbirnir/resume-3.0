export interface GridItemProps {
  inTransition: boolean;
}

export interface GridActionItemProps extends GridItemProps {
  active: boolean;
  setActive: (active: boolean) => void;
}
