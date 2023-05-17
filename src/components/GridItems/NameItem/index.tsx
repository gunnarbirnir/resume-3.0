import type { FC } from "react";
import { useState, useEffect } from "react";

import styles from "./styles.module.css";
import NameImg from "./NameImg";

interface Props {
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
      <h1 className={styles.nameImgContainer} onClick={handleNameClick}>
        {!hideName && <NameImg />}
      </h1>
    </div>
  );
};

export default NameItem;
