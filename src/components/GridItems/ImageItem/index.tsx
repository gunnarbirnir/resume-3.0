import { FC } from "react";
import styled from "styled-components";

import profileImg from "../../../assets/img/profile.webp";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";
import { GridItemProps } from "../types";

const ImageItem: FC<GridItemProps> = ({ rows }) => {
  return (
    <FadeIn direction="down" duration="slow">
      <PerspectiveHover
        style={{
          height: "100%",
        }}
      >
        <ProfileImage
          alt="Profile"
          src={profileImg}
          style={{
            objectPosition: rows === 3 ? "left 0px top -25px" : "top",
          }}
        />
      </PerspectiveHover>
    </FadeIn>
  );
};

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  user-select: none;
  background-color: var(--color-gray-5);
`;

export default ImageItem;
