import type { FC } from "react";

import info from "../../../assets/json/info.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";

const InfoItem: FC = () => {
  return (
    <FadeIn>
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
    </FadeIn>
  );
};

export default InfoItem;
