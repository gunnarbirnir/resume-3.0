import type { FC } from "react";

import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles.module.css";

interface Props {
  buttonTitle?: string;
}

const ButtonCardContent: FC<Props> = ({ buttonTitle }) => {
  return (
    <div className={styles.buttonCardContent}>
      <h2>{buttonTitle}</h2>
      <IconButton icon={Icon.Arrow} color="light" />
    </div>
  );
};

export default ButtonCardContent;
