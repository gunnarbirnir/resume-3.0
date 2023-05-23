import { FC } from "react";
import styled from "styled-components";

import profileImg from "../../../assets/img/profile.webp";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";
import { GridItemProps } from "../types";

const ImageItem: FC<GridItemProps> = ({ rows }) => {
  return (
    <FadeIn direction="down" duration="slow">
      <ImageContainer>
        <ProfileImage
          alt="Profile"
          src={profileImg}
          style={{
            height: rows === 3 ? "calc(100% + 20px)" : "100%",
          }}
        />
      </ImageContainer>
    </FadeIn>
  );
};

const ImageContainer = styled(PerspectiveHover)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  object-fit: cover;
  object-position: top;
  user-select: none;
  background-color: var(--color-gray-5);
`;

export default ImageItem;
