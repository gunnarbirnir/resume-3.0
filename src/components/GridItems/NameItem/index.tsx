import type { FC } from "react";

import type { GridItemProps } from "../types";
import styles from "./styles.module.css";
import NameImg from "./NameImg";

interface Props extends GridItemProps {
  clearActiveItem: () => void;
}

const NameItem: FC<Props> = ({ clearActiveItem }) => {
  return (
    <div className={styles.nameItem}>
      <div className={styles.nameImgContainer} onClick={clearActiveItem}>
        <NameImg />
      </div>
    </div>
  );
};

export default NameItem;
