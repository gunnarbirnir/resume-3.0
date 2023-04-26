import type { FC } from "react";

import profileImg from "../../../assets/img/profile.jpg";
import { FadeIn } from "../../elements";
import type { GridItemProps } from "../types";
import styles from "./styles.module.css";

const ImageItem: FC<GridItemProps> = () => {
  return (
    <FadeIn visible direction="down">
      <img alt="Profile" src={profileImg} className={styles.profileImg} />
    </FadeIn>
  );
};

export default ImageItem;
