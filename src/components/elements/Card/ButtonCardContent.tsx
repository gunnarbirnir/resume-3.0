import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  buttonTitle?: string;
}

const ButtonCardContent: FC<Props> = ({ buttonTitle }) => {
  return (
    <div className={styles.buttonCardContent}>
      <h2>{buttonTitle}</h2>
    </div>
  );
};

export default ButtonCardContent;
