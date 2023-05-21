import { useState, FC, PropsWithChildren, MouseEvent } from "react";

interface Props {
  rotateAmount?: number;
  className?: string;
}

const DEFAULT_ROTATE_AMOUNT = 4;

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

  return { x: rotateX, y: rotateY };
};

const PerspectiveHover: FC<PropsWithChildren<Props>> = ({
  rotateAmount = DEFAULT_ROTATE_AMOUNT,
  className,
  children,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;

  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    const { x: rotX, y: rotY } = calcRotate(event);
    setRotateX(rotX * rotateAmount);
    setRotateY(rotY * rotateAmount);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

export default PerspectiveHover;
