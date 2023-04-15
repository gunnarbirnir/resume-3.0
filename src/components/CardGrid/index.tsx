import type { FC } from "react";
import { useMemo } from "react";

import styles from "./styles.module.css";
import { Card } from "../elements";

const CardGrid: FC = () => {
  const cards = useMemo(() => {
    const cardArr = [];

    for (let i = 0; i < 9; i++) {
      cardArr.push(<Card key={i}>Card {i + 1}</Card>);
    }

    return cardArr;
  }, []);

  return <div className={styles.cardGrid}>{cards}</div>;
};

export default CardGrid;
