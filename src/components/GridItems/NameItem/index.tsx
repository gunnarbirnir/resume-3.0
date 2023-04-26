import type { FC } from "react";

import nameImg from "../../../assets/img/go.svg";
import type { GridItemProps } from "../types";
import styles from "./styles.module.css";

interface Props extends GridItemProps {
  clearActiveItem: () => void;
}

const NameItem: FC<Props> = ({ clearActiveItem }) => {
  return (
    <div className={styles.nameItem}>
      <div className={styles.nameImgContainer} onClick={clearActiveItem}>
        <img alt="Gunnar Olafsson" src={nameImg} className={styles.nameImg} />
      </div>
    </div>
  );
};

export default NameItem;
