import type { FC } from "react";

import info from "../../../assets/json/info.json";
import { Card } from "../../elements";
import styles from "./styles.module.css";

const InfoItem: FC = () => {
  return (
    <div className={styles.infoItemContainer}>
      {info.items.map((item) => (
        <div className="h-100 w-100" key={item}>
          <Card padding={false}>
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
