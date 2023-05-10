import type { FC } from "react";

import profileImg from "../../../assets/img/profile.jpg";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";
import styles from "./styles.module.css";

const ImageItem: FC = () => {
  return (
    <FadeIn direction="down" duration="slow">
      <PerspectiveHover className="h-100">
        <img alt="Profile" src={profileImg} className={styles.profileImg} />
      </PerspectiveHover>
    </FadeIn>
  );
};

export default ImageItem;
