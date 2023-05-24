export interface GridItemLayoutProps {
  columns: number;
  rows: number;
}

export interface GridActionItemProps {
  inTransition?: boolean;
  active?: boolean;
  setActive?: (active: boolean) => void;
}
