import type { FC } from "react";
import { useState, useEffect } from "react";

import type { GridItemProps } from "../types";
import styles from "./styles.module.css";
import NameImg from "./NameImg";

interface Props extends GridItemProps {
  clearActiveItem: () => void;
}

const NameItem: FC<Props> = ({ clearActiveItem }) => {
  const [hideName, setHideName] = useState(false);

  const handleNameClick = () => {
    clearActiveItem();
    setHideName(true);
  };

  useEffect(() => {
    if (hideName) {
      setHideName(false);
    }
  }, [hideName]);

  return (
    <div className={styles.nameItem}>
      <div className={styles.nameImgContainer} onClick={handleNameClick}>
        {!hideName && <NameImg />}
      </div>
    </div>
  );
};

export default NameItem;
