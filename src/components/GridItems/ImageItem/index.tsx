import type { FC, MouseEvent } from "react";
import { useState } from "react";

import profileImg from "../../../assets/img/profile.jpg";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";

const ROTATE_AMOUNT = 4;

const calcRotate = (event: MouseEvent<HTMLImageElement>) => {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const percentageX = x > 0 ? x / bounds.width : 0;
  const percentageY = y > 0 ? y / bounds.height : 0;

  const rotateX =
    percentageY > 0.5 ? (percentageY - 0.5) / 0.5 : (0.5 - percentageY) / -0.5;
  const rotateY =
    percentageX > 0.5 ? (percentageX - 0.5) / -0.5 : (0.5 - percentageX) / 0.5;

  return { x: rotateX * ROTATE_AMOUNT, y: rotateY * ROTATE_AMOUNT };
};

const ImageItem: FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;

  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    const { x: rotX, y: rotY } = calcRotate(event);
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <FadeIn direction="down" duration="slow">
      <img
        alt="Profile"
        src={profileImg}
        className={styles.profileImg}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
      />
    </FadeIn>
  );
};

export default ImageItem;
