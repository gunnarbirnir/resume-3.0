import type { FC } from "react";
// import clsx from "clsx";

import nameImg from "../../../assets/go.svg";
// import nameOutlineImg from "../../../assets/go-outline.svg";
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
        {/* <img
          alt="Gunnar Olafsson"
          src={nameOutlineImg}
          className={clsx(styles.nameImg, styles.shiftedNameImg)}
        /> */}
      </div>
    </div>
  );
};

export default NameItem;
