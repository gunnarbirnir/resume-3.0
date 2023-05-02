import type { FC } from "react";

import info from "../../../assets/json/info.json";
import { Card } from "../../elements";
import type { GridItemProps } from "../types";
import styles from "./styles.module.css";

const InfoItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <div className={styles.infoItemContainer}>
      {info.items.map((item) => (
        <div className="h-100 w-100" key={item}>
          <Card inTransition={inTransition} padding={false}>
            <div className={styles.infoItem}>
              <p>{item}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default InfoItem;
