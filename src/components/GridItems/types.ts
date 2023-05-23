export interface GridItemProps {
  columns: number;
  rows: number;
}

export interface GridActionItemProps {
  inTransition?: boolean;
  active?: boolean;
  setActive?: (active: boolean) => void;
}
